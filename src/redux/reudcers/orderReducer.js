import {
  ADD_ORDER,
  DELETE_ORDERS,
  EDIT_ORDER,
  CHECK_ORDER,
} from '../actions/orderActions';

const initialState = {
  list: [

  ],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      if (action.payload.itemList.length !== 0) {
        return {
          ...state,
          list: [
            ...state.list,
            action.payload,
          ],
        };
      }
      // case DELETE_ORDERS:

      //   return {

      //   };
      // case EDIT_ORDER:
      //   return {

      //   };
      // case CHECK_ORDER:
      //   return {

    //   };
    default:
      return state;
  }
}
