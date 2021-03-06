import { combineReducers, createStore } from 'redux';

import order from './reducers/orderReducer';
import shoppingCart from './reducers/shoppingCartReducer';

const reducer = combineReducers({
  order,
  shoppingCart,
});

const store = process.env.NODE_ENV === 'production' ? createStore(reducer) : createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
