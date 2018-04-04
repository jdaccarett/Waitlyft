import { FETCH_LYFT_EST_TIMES } from '../actions/types';


export default function(state = [], action){
  switch (action.type) {
    case FETCH_LYFT_EST_TIMES:
      return action.payload;
    default:
        return state;
  }
}
