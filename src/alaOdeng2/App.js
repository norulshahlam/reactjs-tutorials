import ViewUnpaid from "./ViewUnpaid";
import { Receipt } from "./Receipt";
import { Component } from "react";
import css from "./App.module.css";

const paid = [];
Receipt.forEach((data) => {
  paid.push(data.paid);
});

class App extends Component {
  // https://www.robinwieruch.de/react-state-array-add-update-remove
  constructor(props) {
    super(props);
    //init state using prop of Receipt.paid
    this.state = {
      paid,
    };
  }

  settlePayment = (i) => {
    const paid2 = [...this.state.paid];
    paid2[i] = true;

    this.setState({ paid: paid2 });
  };

  render() {
    let viewUnpay = [];

    Receipt.forEach((data, index) => {
      //add only if cust not paid
      if (this.state.paid[index] === false) {
        viewUnpay.push(
          <ViewUnpaid
            id={index}
            key={index}
            receipt={data}
            person={data.person}
            order={data.order}
            settlePayment={this.settlePayment}
          />
        );
      }
    });
    return (
      <div>
        <div className={css.Title}>Korilla Korean barbecue tacos</div>
        {this.state.paid.includes(false) ? (
          <div className={css.container}>{viewUnpay}</div>
        ) : (
          <div className={css.Title}>All Paid!</div>
        )}
      </div>
    );
  }
}

export default App;
