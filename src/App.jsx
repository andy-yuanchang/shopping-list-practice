import React, { useState, useRef } from 'react';

import OrderedList from './components/orderedList/OrderedList';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import StoreList from './components/storeList/StoreList';
import PopUpModal from './components/modal/PopUpModal';
import Button from './components/button/Button';
import SignUp from './components/SignUp/SignUp';

import './App.less';

const ModalEnum = {
  ORDERED_LIST: 'ORDERED_LIST',
  CART: 'CART',
};

function App() {
  const [modalType, setModalType] = useState('');
  const app = useRef(null);

  const handleOpenOrderedList = () => {
    setModalType(ModalEnum.ORDERED_LIST);
  };

  const handleOpenCart = () => {
    setModalType(ModalEnum.CART);
  };

  const handleCloseModal = () => {
    setModalType('');
  };

  const renderButtons = () => (
    <div className="buttons">
      <Button
        text="History Orders"
        onClick={handleOpenOrderedList}
        size="large"
      />
      <Button
        text="Cart"
        onClick={handleOpenCart}
        size="large"
      />
    </div>
  );

  const getModalTitleStr = () => {
    switch (modalType) {
      case ModalEnum.ORDERED_LIST:
        return 'History Orders';
      case ModalEnum.CART:
        return 'Cart List';
      default:
        return '';
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case ModalEnum.ORDERED_LIST:
        return (
          <OrderedList />
        );
      case ModalEnum.CART:
        return (
          <ShoppingCart
            onClose={handleCloseModal}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div id="app" ref={app}>
      <div className="nav-bar">
        {renderButtons()}
      </div>
      <SignUp />
      <StoreList />
      {
        modalType && (
          <PopUpModal
            title={getModalTitleStr()}
            renderContent={renderModalContent}
            onClose={handleCloseModal}
          />
        )
      }
    </div>
  );
}

App.propTypes = {

};

export default App;
