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
        if(this.state.est_wait_time === 0){
            console.log('cleared iterval');
            clearInterval(this.state.timer);
            this.setState({est_wait_time: 0});
            console.log("id: ", this.props.table._id);
            this.props.deleteTable(this.props.table._id);
            this.props.fetchTables();

        }else{
            this.setState({est_wait_time: this.state.est_wait_time - 1});
        }
      }

    render() {
        return (
        <div className={"tables__item"}>
          <div>TableNumber: {this.props.table.tableNumber}</div>
          <div>TableSection: {this.props.table.tableSection}</div>
          <div>Seats:  {this.props.table.seats}</div>
          <div>Wait Time: {this.state.est_wait_time} mins</div>
          <div>{this.props.table._id}</div>
        </div>
        );
    }
}

//wire up to redux.
function mapStateToProps(state){
  return { tables: state.tables };
}

export default connect(mapStateToProps, { deleteTable, fetchTables })(TableItem);
