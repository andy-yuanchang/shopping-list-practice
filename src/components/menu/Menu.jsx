import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addItem,
} from '../../redux/actions/shoppingCartActions';

import './Menu.less';

function Menu(props) {
  const { storeName, itemList } = props;
  const dispatch = useDispatch();

  const handleAddItem = (name) => {
    dispatch(addItem({
      storeName,
      name,
      count: 1,
    }));
  };

  return (
    <div className="menu">
      {
        itemList.map((item, index) => (
          <div className="item" key={index}>
            <div
              className="name"
            >
              {item.name}
            </div>
            <div
              className="increase"
              onClick={() => {
                handleAddItem(item.name);
              }}
            />
          </div>
        ))
      }
    </div>
  );
}

Menu.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
