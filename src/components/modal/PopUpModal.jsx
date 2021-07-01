import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import './PopUpModal.less';

function PopUpModal(props) {
  const { title = '', renderContent, onClose } = props;

  return (
    <div className="pop-up-modal">
      <div className="modal-area">
        <div className="modal-title">
          {title}
        </div>
        <div className="modal-content">
          {renderContent && renderContent()}
        </div>
        <div className="modal-footer">
          <Button
            text="close"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}

PopUpModal.propTypes = {
  title: PropTypes.string,
  renderContent: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default PopUpModal;
