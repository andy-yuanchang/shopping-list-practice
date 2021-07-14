import React, { useState, useRef, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect,
} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

import OrderedList from './components/orderedList/OrderedList';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import StoreList from './components/storeList/StoreList';
import PopUpModal from './components/modal/PopUpModal';
import Button from './components/button/Button';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import * as fromMessageHelper from './js/messageHelper';
import { useAuth } from './contexts/AuthContext';

import './App.less';

const ModalEnum = {
  ORDERED_LIST: 'ORDERED_LIST',
  CART: 'CART',
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: [theme.palette.primary.contrastText],
    backgroundColor: [theme.palette.grey[500]],
  },
}));

function App() {
  const classes = useStyles();
  const [modalType, setModalType] = useState('');
  const [isToggle, setIsToggle] = useState(false);
  const { currentUser, logout } = useAuth();
  const app = useRef(null);

  const handleOpenOrderedList = () => {
    // setModalType(ModalEnum.ORDERED_LIST);
  };

  const handleOpenCart = () => {
    // setModalType(ModalEnum.CART);

  };

  const handleCloseModal = () => {
    setModalType('');
  };

  const renderButtons = () => (
    <>
      <Link to="/">
        <Button
          text="Home Page"
          onClick={handleOpenOrderedList}
          size="large"
          render={() => (<HomeIcon />)}
        />
      </Link>
      <Link to="/history">
        <Button
          text="History Orders"
          onClick={handleOpenOrderedList}
          size="large"
          render={() => (<ListAltIcon />)}
        />
      </Link>
      <Link to="/cart">
        <Button
          text="Cart"
          onClick={handleOpenCart}
          size="large"
          render={() => (<ShoppingCartIcon />)}
        />
      </Link>
      {
        currentUser
          ? (
            <Avatar
              className={`${classes.avatar} avatar`}
              alt={currentUser.email}
              title={currentUser.email}
            >
              <PersonIcon />
            </Avatar>
          ) : (
            <Link to="/login">
              <Button
                text="Sign In"
                size="large"
              />
            </Link>
          )
      }
      {
        currentUser && (
          <div
            className={`toggle ${isToggle ? 'up' : 'down'}`}
            onClick={() => setIsToggle((v) => !v)}
          >
            <div
              className="drop-down-list"
              hidden={!isToggle}
              scrollbars
            >
              <tab className="item">
                <Button
                  text="Log Out"
                  size="large"
                  onClick={handleLogOut}
                />
              </tab>
            </div>
          </div>
        )
      }
    </>
  );

  const handleLogOut = async () => {
    try {
      await logout();
      fromMessageHelper.addSuccess('Log out');
    } catch (error) {
      fromMessageHelper.addError(error.message);
    }
  };

  const getModalTitleStr = () => {
    switch (modalType) {
      case ModalEnum.ORDERED_LIST:
        return 'History Orders';
      case ModalEnum.CART:
        return 'Cart List';
      default:
        return '';
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case ModalEnum.ORDERED_LIST:
        return (
          <OrderedList />
        );
      case ModalEnum.CART:
        return (
          <ShoppingCart
            onClose={handleCloseModal}
          />
        );
      default:
        return null;
    }
  };

  function renderMainPage() {
    return (
      <>
        <StoreList />
        {
          modalType && (
            <PopUpModal
              title={getModalTitleStr()}
              renderContent={renderModalContent}
              onClose={handleCloseModal}
            />
          )
        }
      </>
    );
  }

  return (
    <div id="app" ref={app}>
      <Router>
        <div className="nav-bar">
          <div className="nav-bar-set">
            {renderButtons()}
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={renderMainPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/cart">
            <ShoppingCart
              onClose={handleCloseModal}
            />
          </PrivateRoute>
          <PrivateRoute path="/history">
            <OrderedList />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => (currentUser ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

App.propTypes = {

};

export default App;
