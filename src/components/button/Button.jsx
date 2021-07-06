import React from 'react';
import PropTypes from 'prop-types';

import './Button.less';

function Button(props) {
  const { text, onClick, size = 'medium' } = props;

  return (
    <div
      className={`button ${size}`}
      onClick={onClick}
      onKeyDown={undefined}
      role="button"
      tabIndex={0}
      aria-label="button"
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};

export default Button;
