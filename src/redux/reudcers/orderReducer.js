import {
  ADD_ORDER,
  DELETE_ORDERS,
  EDIT_ORDER,
  CHECK_ORDER,
} from '../actions';

const initialState = {

};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:

    case DELETE_ORDERS:

    case EDIT_ORDER:

    case CHECK_ORDER:

    default:
      return state;
  }
}
