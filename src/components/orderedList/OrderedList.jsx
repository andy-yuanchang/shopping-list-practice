import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './OrderedList.less';

function OrderedList(props) {
  const orederedList = useSelector((state) => state.order.list);

  const renderItemList = (itemList) => (
    <>
      {
        itemList.map((item, index) => (
          <div className="item" key={index}>
            {`${item.storeName} ${item.name} x ${item.count}`}
          </div>
        ))
      }
    </>
  );

  return (
    <div className="ordered-list">
      {
        orederedList.map((order, index) => (
          <div className="order-item" key={index}>
            {renderItemList(order.itemList)}
          </div>
        ))
      }
    </div>
  );
}

OrderedList.propTypes = {
  orderedList: PropTypes.arrayOf(PropTypes.object),
};

export default OrderedList;
