import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTables, fetchLyftToken } from "../../actions"; // action creator.
import TableItem from "./TableItem";

class TableList extends Component {
  //lifecylce method.
  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchLyftToken();
  }

  renderTables() {
    return this.props.tables.map((table, i) => {
      return (
        <TableItem
          lyftToken={this.props.lyftToken}
          table={table}
          address={this.props.coordinates}
          key={i}
        />
      );
    });
  }

  render() {
    return <div className={"tableList"}>          {this.renderTables()}</div>;
  }
}

//wire up to redux.
function mapStateToProps(state) {
  return {
    tables: state.tables,
    lyftToken: state.lyftToken
  };
}

export default connect(mapStateToProps, { fetchTables, fetchLyftToken })(
  TableList
);
