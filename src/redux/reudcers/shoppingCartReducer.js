import _ from 'lodash';
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
      const index = state.list.findIndex((item) => {
        const hasSameItemName = item.name === action.payload.name;
        const hasSameStoreName = item.storeName === action.payload.storeName;
        const isItemMatched = hasSameItemName && hasSameStoreName;
        return isItemMatched;
      });
      if (index !== -1) {
        const newState = _.cloneDeep(state);
        const previousCount = newState.list[index].count;
        newState.list[index] = action.payload.count + previousCount;
        return newState;
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
      const index = state.list.findIndex(
        (item) => item.name === action.payload.name && item.storeName === action.payload.storeName,
      );
      const newState = _.cloneDeep(state);
      if (index !== -1) {
        const remainCount = newState.list[index].count - action.payload.count;
        if (remainCount <= 0) {
          newState.list.splice(index, 1);
        } else {
          newState.list[index].count = remainCount;
        }
        return newState;
      }
      return newState;
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
