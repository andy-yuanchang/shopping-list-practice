import React from 'react';
import PropTypes from 'prop-types';

import './Button.less';

function Button(props) {
  const { text, onClick, size = 'medium' } = props;

  return (
    <div
      className={`button ${size}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
