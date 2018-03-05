import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_TABLES } from './types';


export const fetchUser = () => {

  return function(dispatch) {
      axios.get('/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };

  // const request = axios.get('/api/current_user');
  //
  // return {
  //   type: FETCH_USER,
  //   payload: request
  // };

};

export const fetchTables = () => {

  return function(dispatch) {
      axios.get('/api/tables')
        .then(res => dispatch({ type: FETCH_TABLES, payload: res.data }));
  };

};