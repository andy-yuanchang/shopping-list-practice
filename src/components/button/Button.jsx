import React from 'react';
import PropTypes from 'prop-types';

import './Button.less';

function Button(props) {
  const { text, onClick } = props;

  return (
    <div
      className="button"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
