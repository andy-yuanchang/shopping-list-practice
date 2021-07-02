import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import './PopUpModal.less';

function PopUpModal(props) {
  const { title = '', renderContent, onClose } = props;

  const modal = useRef(null);

  useEffect(() => {
    modal.current.addEventListener('click', handleClick);
    return () => {
      modal.current.removeEventListener('click', handleClick);
    };
  });

  const handleClick = (e) => {
    if (e.target.classList.contains('pop-up-modal')) {
      onClose();
    }
  };

  return (
    <div className="pop-up-modal" ref={modal}>
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
  title: PropTypes.string,
  renderContent: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default PopUpModal;
