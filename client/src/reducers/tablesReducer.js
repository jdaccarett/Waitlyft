import { FETCH_TABLES } from '../actions/types';
import { DELETE_TABLES } from '../actions/types';


export default function(state = [], action){
  switch (action.type) {
    case FETCH_TABLES:
      return action.payload;
    case DELETE_TABLES:
      return state;
    default:
        return state;
  }
}
