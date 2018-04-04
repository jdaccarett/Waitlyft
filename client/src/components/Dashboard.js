import React, { Component } from "react";
import TableList from "./tables/TableList";
import TableForm from "./tables/TableForm";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: "", lng: "" };

    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getCoordinates(lat, lng) {
    this.setState({
      lat,
      lng
    });
  }

  render() {
    console.log(this.state);
    const address = this.state.lat;

    const display = address ? (
      <TableList coordinates={this.state} />
    ) : (
      <div className="">
        <h2>Enter Your Address First</h2>
        <TableForm getAddress={this.getCoordinates} />
      </div>
    );

    return (
      <div>
        Dashboard
        {display}
      </div>
    );
  }
}

export default Dashboard;
