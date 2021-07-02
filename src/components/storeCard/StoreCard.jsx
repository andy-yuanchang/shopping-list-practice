import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu/Menu';
import PopUpModal from '../modal/PopUpModal';

import './StoreCard.less';

function StoreCard(props) {
  const { storeName = '', itemList = [] } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const renderMenu = () => (
    <Menu
      storeName={storeName}
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
          {storeName}
        </div>
      </div>
      {isOpenModal && (
        <PopUpModal
          title={`${storeName} Menu`}
          renderContent={renderMenu}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

StoreCard.propTypes = {
  storeName: PropTypes.string.isRequired,
  itemList: PropTypes.array.isRequired,
};

export default StoreCard;
