import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import * as fromMessageHelper from '../../js/messageHelper';

import {
  addItem,
  deleteItem,
  clearAllItems,
} from '../../redux/actions/shoppingCartActions';

import {
  addOrder,
} from '../../redux/actions/orderActions';

import './ShoppingCart.less';

function ShoppingCart(props) {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.shoppingCart.list);
  const { onClose } = props;

  const handleAddItem = (item) => {
    dispatch(addItem({
      storeName: item.storeName,
      name: item.name,
      count: 1,
    }));
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteItem({
      storeName: item.storeName,
      name: item.name,
      count: 1,
    }));
  };

  const handleAddOrder = () => {
    if (itemList.length === 0) {
      return fromMessageHelper.addWarning('Your Cart is Empty!');
    }
    dispatch(addOrder({
      itemList,
    }));
    dispatch(clearAllItems());
    fromMessageHelper.addMessageSaved();
    onClose();
  };

  return (
    <div className="shopping-cart">
      {
        itemList.map((item, index) => (
          <div className="item" key={index}>
            <div className="store-name">{item.storeName}</div>
            <div className="item-name">{item.name}</div>
            <div className="count-area">
              <div className="decrease" onClick={() => handleDeleteItem(item)} />
              <div className="count">{item.count}</div>
              <div className="increase" onClick={() => handleAddItem(item)} />
            </div>
          </div>
        ))
      }
      <div className="footer">
        <Button
          text="Order"
          onClick={handleAddOrder}
          size="large"
        />
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func.isRequired,
};

export default ShoppingCart;
