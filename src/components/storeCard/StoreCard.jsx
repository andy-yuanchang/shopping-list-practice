import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu/Menu';
import PopUpModal from '../modal/PopUpModal';

import './StoreCard.less';

function StoreCard(props) {
  const { text = '', itemList = [] } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const renderMenu = () => (
    <Menu
      itemList={itemList}
    />
  );

  return (
    <>
      <div
        className="store-card"
        onClick={handleOpenModal}
      >
        <div className="content">
          {text}
        </div>
      </div>
      {isOpenModal && (
        <PopUpModal
          title={`${text} Menu`}
          renderContent={renderMenu}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

StoreCard.propTypes = {
  text: PropTypes.string.isRequired,
  itemList: PropTypes.array.isRequired,
};

export default StoreCard;
