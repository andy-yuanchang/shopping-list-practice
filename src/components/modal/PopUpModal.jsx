import React from 'react';
import PropTypes from 'prop-types';

import './PopUpModal.less';

function PopUpModal(props) {
  const { title = '', renderContent, onClose } = props;

  const handleClick = (e) => {
    if (e.target.classList.contains('pop-up-modal')) {
      onClose();
    }
  };

  return (
    <div className="pop-up-modal" onClick={handleClick}>
      <div className="modal-area">
        <div className="modal-title">
          {title}
        </div>
        <div className="modal-content">
          {renderContent && renderContent()}
        </div>
      </div>
    </div>
  );
}

PopUpModal.propTypes = {
  title: PropTypes.string.isRequired,
  renderContent: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUpModal;
