import {
  ADD_ITEM,
  DELETE_ITEM,
  CLEAR_ALL_ITEMS,
} from '../actions/shoppingCartActions';

const initialState = {
  list: [

  ],
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const index = state.list.findIndex((item) => item.name === action.payload.name && item.storeName === action.payload.storeName);
      if (index !== -1) {
        const previousCount = state.list[index].count;
        action.payload.count += previousCount;
        state.list[index] = action.payload;
        return {
          ...state,
          list: [
            ...state.list,
          ],
        };
      }
      return {
        ...state,
        list: [
          ...state.list,
          action.payload,
        ],
      };
    }
    case DELETE_ITEM: {
      const index = state.list.findIndex((item) => item.name === action.payload.name && item.storeName === action.payload.storeName);
      if (index !== -1) {
        const remainCount = state.list[index].count - action.payload.count;
        if (remainCount <= 0) {
          state.list.splice(index, 1);
        } else {
          state.list[index].count = remainCount;
        }
        return {
          ...state,
          list: [
            ...state.list,
          ],
        };
      }
    }
    case CLEAR_ALL_ITEMS: {
      return {
        ...state,
        list: [],
      };
    }
    // fall through
    default:
      return state;
  }
}
