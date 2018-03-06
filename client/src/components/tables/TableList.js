import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTables } from '../../actions'; // action creator.
import TableItem from './TableItem';


class TableList extends Component {

  //lifecylce method.
  componentDidMount(){
    this.props.fetchTables();
  }

  renderTables(){
    return this.props.tables.map((table, i) => {
      return(
        <TableItem table={table} key={i}/>
      );
    });
  }

  render() {
    return(
      <div className={"tableList"} >
          {this.renderTables()}
      </div>
    );
  }
}

//wire up to redux.
function mapStateToProps(state){
  return { tables: state.tables };
}

export default connect(mapStateToProps, { fetchTables })(TableList);
