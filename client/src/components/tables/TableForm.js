//TableForm shows a form for a user to add input
import React, { Component } from "react";
import where from "node-where";

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    where.is(this.state.value, (err, result) => {
      if (result) {
        this.props.getAddress(result.get("lat"), result.get("lng"));
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Address:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TableForm;
