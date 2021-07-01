import React, { useState, useEffect } from 'react';

import OrderedList from './components/orderedList/OrderedList';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import StoreList from './components/storeList/StoreList';
import PopUpModal from './components/modal/PopUpModal';

import './App.less';

function App() {
  return (
    <div id="app">
      <StoreList />
    </div>
  );
}

App.propTypes = {

};

export default App;
