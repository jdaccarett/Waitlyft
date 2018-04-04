import { FETCH_LYFT_TOKEN } from '../actions/types';

export default function(state = null, action){
  switch (action.type) {
    case FETCH_LYFT_TOKEN:
      return action.payload;
    default:
        return state;
  }
}
