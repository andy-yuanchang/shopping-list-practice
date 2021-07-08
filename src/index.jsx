import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme';

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
      <CssBaseline />
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
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={messageStackNum}
        anchorOrigin={messagePopupDirection}
        preventDuplicate={preventDuplicateMessage}
        classes={overrideStyle}
      >
        <InitSnackbar />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <InitApp />,
  document.getElementById('root'),
);
