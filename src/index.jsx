import { CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import {
  config as messageConfig,
  setSnackBar
} from './js/messageHelper';
import theme from './js/theme';
import store from './redux';

function InitSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    setSnackBar(enqueueSnackbar, closeSnackbar);
  });

  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Route path="/" component={App} />
      </Router>
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
        <AuthProvider>
          <InitSnackbar />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <InitApp />,
  document.getElementById('root'),
);
