import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core';

import {
  config as messageConfig,
  setSnackBar,
} from './js/messageHelper';
import App from './App';
import store from './redux';

function InitSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    setSnackBar(enqueueSnackbar, closeSnackbar);
  });

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function InitApp() {
  const {
    messageStyles, messageStackNum, messagePopupDirection, preventDuplicateMessage,
  } = messageConfig;
  const useStyles = messageStyles ? makeStyles(messageStyles) : null;
  let overrideStyle;
  if (useStyles) {
    const classes = useStyles();
    overrideStyle = {
      variantSuccess: classes.success,
      variantError: classes.error,
      variantWarning: classes.warning,
      variantInfo: classes.info,
    };
  }

  return (
    <SnackbarProvider
      maxSnack={messageStackNum}
      anchorOrigin={messagePopupDirection}
      preventDuplicate={preventDuplicateMessage}
      classes={overrideStyle}
    >
      <InitSnackbar />
    </SnackbarProvider>
  );
}

ReactDOM.render(
  <InitApp />,
  document.getElementById('root'),
);
