import React, { Component } from "react";
import css from "./App.module.css";

class ViewUnpaid extends Component {
  settlePayment = (e) => {
    this.props.settlePayment(e.target.id);
  };
  render() {
    //destructuring
    const { person, order, id } = this.props;

    return (
      <div className={css.Receipt}>
        <div className={css.Person}>{person}</div>

        <div className={css.Flex}>
          <div className={css.Order}>
            {Object.entries(order).map((name, id) => (
              <div key={id}>{name[0]}</div>
            ))}
          </div>
          <div className={css.Order}>
            {Object.entries(order).map((item, id) => (
              <div key={id}>: {item[1]}</div>
            ))}
          </div>
        </div>

        <button id={id} onClick={this.settlePayment} className={css.btn}>
          Settle Payment
        </button>
      </div>
    );
  }
}

export default ViewUnpaid;
