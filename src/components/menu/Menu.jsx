import React from 'react';
import PropTypes from 'prop-types';

import './Menu.less';

function Menu(props) {
  const { itemList } = props;

  return (
    <div className="menu">
      {
        itemList.map((item, index) => (
          <div
            className="item"
            key={index}
          >
            {item.name}
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
