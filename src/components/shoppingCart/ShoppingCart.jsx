import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as fromMessageHelper from '../../js/messageHelper';
import {
  addOrder,
} from '../../redux/actions/orderActions';
import {
  addItem, clearAllItems, deleteItem,
} from '../../redux/actions/shoppingCartActions';
import Button from '../button/Button';
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

  const handleDeleteItem = (item) => dispatch(deleteItem({
    storeName: item.storeName,
    name: item.name,
    count: 1,
  }));

  const handleAddOrder = () => {
    if (itemList.length === 0) {
      return fromMessageHelper.addWarning('Your Cart is Empty!');
    }
    dispatch(addOrder({
      itemList,
    }));
    dispatch(clearAllItems());
    fromMessageHelper.addMessageSaved();
    return onClose();
  };

  return (
    <div className="shopping-cart">
      <h1 className="title">
        Items in Cart
      </h1>
      {
        itemList.map((item, index) => (
          <div className="item" key={index}>
            <div className="store-name">{item.storeName}</div>
            <div className="item-name">{item.name}</div>
            <div className="count-area">
              <div
                className="decrease"
                onClick={() => handleDeleteItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={undefined}
                aria-label="decrease a item"
              />
              <div className="count">{item.count}</div>
              <div
                className="increase"
                onClick={() => handleAddItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={undefined}
                aria-label="increase a item"
              />
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
  onClose: PropTypes.func.isRequired,
};

export default ShoppingCart;
