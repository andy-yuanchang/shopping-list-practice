import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: '200px',
    position: 'absolute',
    'z-index': -1,
    '&.open': {
      visibility: 'visible',
    },
    '&.hidden': {
      visibility: 'hidden',
    },
  },
  list: {
    listStyle: 'none',
    background: 'white',
    boxShadow: '0 2px 8px 0 rgb(0 0 0 / 8%)',
    transition: 'all 0.3s ease-out',
    '&.open': {
      transform: 'translate3d(0, 100%, 0)',
    },
    '&.hidden': {
    },
  },
  'list-item': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

export default function DropDownMenu(props) {
  const classes = useStyles();
  const observerRef = useRef(null);
  const menuRef = useRef(null);
  const [rightOffset, setRightOffset] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);

  const {
    list = [],
    isOpen = false,
    style = {},
  } = props;

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entires) => {
      const entry = entires[0];
      console.log(entry.intersectionRatio, entry.boundingClientRect, entry.intersectionRect);
      if (entry.intersectionRatio < 1) {
        const { boundingClientRect, intersectionRect } = entry;
        const rOffset = boundingClientRect.right - intersectionRect.right;
        const lOffset = boundingClientRect.left - intersectionRect.left;
        setRightOffset(rOffset);
        setLeftOffset(lOffset);
      }
    });
    observerRef.current.observe(menuRef.current);
  }, []);

  return (
    <div
      style={{
        ...style,
        right: rightOffset > 0 ? '0px' : 'auto',
        left: leftOffset < 0 ? '0px' : 'auto',
      }}
      className={`${classes.root} ${isOpen ? 'open' : 'hidden'}`}
      ref={menuRef}
    >
      <ul className={`${classes.list} ${isOpen ? 'open' : 'hidden'}`}>
        {
          list.map((item, index) => (
            <li className={classes['list-item']} key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

DropDownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.object,
};
