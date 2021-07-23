import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useRef, useState } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import PopUpModal from './components/modal/PopUpModal';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import OrderedList from './components/orderedList/OrderedList';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import StoreList from './components/storeList/StoreList';
import RedirectLoginRoute from './js/redirectLoginRoute';
import { useAuth } from './contexts/AuthContext';
import * as fromMessageHelper from './js/messageHelper';
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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { currentUser, logout } = useAuth();
  const app = useRef(null);

  const handleCloseModal = () => {
    setModalType('');
  };

  const renderToggle = () => (
    <div
      className={`toggle-button ${isOpenMenu ? 'close' : 'open'}`}
      onClick={() => {
        setIsOpenMenu(v => {
          if (v) {
            setIsOpen(false)
          }
          return !v
        })
      }}
    >
      <div className="topBar" />
      <div className="middleBar" />
      <div className="bottomBar" />
    </div>
  )

  function handleOpenDropDownMenu() {
    setIsOpen(true)
  }

  function handleCloseDropDownMenu(e) {
    // if (e.target.className.contains())
    setIsOpen(false)
  }

  const renderButtons = () => (
    <>
      <div className="nav-buttons">
        <Link to="/storelist">
          <Button
            startIcon={<HomeIcon />}
            color="primary"
          >
            Home Page
          </Button>
        </Link>
        <Link to="/history">
          <Button
            startIcon={<ListAltIcon />}
            color="primary"
          >
            History Orders
          </Button>
        </Link>
        <Link to="/cart">
          <Button
            startIcon={<ShoppingCartIcon />}
            color="primary"
          >
            Cart
          </Button>
        </Link>
      </div>
      <div className="user-info">
        {
          currentUser
            ? (
              <>
                <Avatar
                  className={`${classes.avatar} avatar`}
                  alt={currentUser.email}
                  title={currentUser.email}
                >
                  <PersonIcon />
                </Avatar>
                <div
                  className={`arrow ${isOpen ? 'up' : 'down'}`}
                  onMouseEnter={handleOpenDropDownMenu}
                  onMouseLeave={handleCloseDropDownMenu}
                >
                  <DropDownMenu
                    list={getUserDropDownList()}
                    isOpen={isOpen}
                  />
                </div>
              </>
            ) : (
              <Link to="/login">
                <Button
                  color="primary"
                >
                  Sign In
                </Button>
              </Link>
            )
        }
      </div>
    </>
  );

  function getUserDropDownList() {
    return [
      <Button
        color="primary"
        onClick={handleLogOut}
      >
        Log Out
      </Button>,
    ];
  }

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
      <div className="nav-bar">
        {renderToggle()}
        <div className={`nav-bar-set ${isOpenMenu || 'hidden'}`}>
          {renderButtons()}
        </div>
      </div>
      <Switch>
        <Route path="/storelist" component={StoreList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <RedirectLoginRoute path="/cart">
          <ShoppingCart />
        </RedirectLoginRoute>
        <RedirectLoginRoute path="/history">
          <OrderedList />
        </RedirectLoginRoute>
        <Redirect to="/storelist" />
      </Switch>
    </div>
  );
}

App.propTypes = {

};

export default App;
