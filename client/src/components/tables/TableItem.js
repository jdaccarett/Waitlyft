//TableNew shows TableForm and TableFormReview
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchlyftEstTimes } from "../../actions"; // action creator.

class TableItem extends Component {
  handleClick = () => {
    this.props.fetchlyftEstTimes(
      this.props.lyftToken,
      `${this.props.address.lat}`,
      `${this.props.address.lng}`
    );

    console.log(this.props.lyftCostEst);
  };

  render() {
    return (
      <div className="tableList__item">
                  <div className="tableList__item-tableNumber">
          Table Number <span>{this.props.table.tableNumber}</span>
        </div>
        <div className="tableList__itemCont-one">
          <div className="tableList__item-section">
            Section: {this.props.table.tableSection}
          </div>
                    <div className="tableList__item-seats">
            Seats: {this.props.table.seats}
          </div>
        </div>
        <div className="tableList__itemCont-two">
          <a
            onClick={this.handleClick}
            className="btn btn--white btn--animated"
          >
            Reserve
          </a>
        </div>
                  <div className="tableList__item-time">
          Wait Time: <span>{this.props.est_wait_time} mins</span>
        </div>
      </div>
    );
  }
}

//wire up to redux.
function mapStateToProps(state) {
  return {
    lyftCostEst: state.lyftCostEst
  };
}

export default connect(mapStateToProps, { fetchlyftEstTimes })(TableItem);
