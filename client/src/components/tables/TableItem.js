//TableNew shows TableForm and TableFormReview
import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteTable, fetchTables } from '../../actions'; // action creator.


class TableItem extends Component {

    state = {
        timer: null,
        est_wait_time: this.props.table.est_wait_time
      };

    componentDidMount() {
        let timer = setInterval(this.tick.bind(this), 60000);
        this.setState({timer});
      }

    componentWillUnmount() {
        clearInterval(this.state.timer);
      }


    tick(){
        console.log('call tick');
        if(this.state.est_wait_time > 0){
            this.setState({est_wait_time: this.state.est_wait_time - 1});
        }
        if(this.state.est_wait_time === 0){
            console.log('cleared iterval');
            clearInterval(this.state.timer);
            this.setState({est_wait_time: 0});
            console.log("id: ", this.props.table._id);
            // this.props.deleteTable(this.props.table._id);
            // this.props.fetchTables();

        }
      }

    render() {
        return (
        <div className="tableList__item">
          <div className="tableList__item-tableNumber">Table Number <span>{this.props.table.tableNumber}</span></div>
          <div className="tableList__itemCont-one">
            <div className="tableList__item-section" >Section: {this.props.table.tableSection}</div>
            <div className="tableList__item-seats">Seats: {this.props.table.seats}</div>
          </div>
          <div className="tableList__itemCont-two">
            <a href="/auth/facebook" className="btn btn--white btn--animated">Reserve</a>
          </div>
          <div className="tableList__item-time">Wait Time: <span>{this.state.est_wait_time} mins</span></div>
        </div>
        );
    }
}

//wire up to redux.
function mapStateToProps(state){
  return { tables: state.tables };
}

export default connect(mapStateToProps, { deleteTable, fetchTables })(TableItem);
