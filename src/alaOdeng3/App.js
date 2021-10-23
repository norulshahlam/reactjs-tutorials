import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // g) componentDidMount(), h) axios, i)setState on fetch data
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://data.gov.sg/api/3/action/help_show?name=datastore_search`
    );

    this.setState({ loading: false, users: res });
  }
  render() {
    console.log(this.state.users.data);
    let i = this.state.users.data;
    console.log((Object.keys(i)[2]);
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

export default App;
