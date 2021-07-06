import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './PopUpModal.less';

function PopUpModal(props) {
  const { title = '', renderContent, onClose } = props;

  const modal = useRef(null);

  const handleClick = (e) => {
    if (e.target.classList.contains('pop-up-modal')) {
      onClose();
    }
  };

  useEffect(() => {
    modal.current.addEventListener('click', handleClick);
    return () => {
      modal.current.removeEventListener('click', handleClick);
    };
  });

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
  title: PropTypes.string.isRequired,
  renderContent: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUpModal;
