import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
        onKeyDown={undefined}
        role="menuitem"
        tabIndex={0}
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
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StoreCard;
