import {
  ADD_ORDER,
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
      return state;
    default:
      return state;
  }
}
