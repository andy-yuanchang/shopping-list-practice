const MessageType = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};

const messageStyles = {
  success: { backgroundColor: 'green !important' },
  error: { backgroundColor: 'red !important' },
  warning: { backgroundColor: 'yellow !important' },
  info: { backgroundColor: 'blue !important' },
};

const USE_DEFAULT_STYLES = true;

const MESSAGE_STACK_NUM = 3;

const MESSAGE_POPUP_DIRECTION = {
  vertical: 'bottom', // top, bottom
  horizontal: 'left', // left, center, right
};

const PREVENT_DUPLICATE_MESSAGE = true;

const config = {
  messageType: MessageType,
  messageStyles: USE_DEFAULT_STYLES ? null : messageStyles,
  messageStackNum: MESSAGE_STACK_NUM,
  messagePopupDirection: MESSAGE_POPUP_DIRECTION,
  preventDuplicateMessage: PREVENT_DUPLICATE_MESSAGE,
};

const messages = [];

const queue = {
  enqueue: () => { },
  close: () => { },
};

const getMessages = () => messages;

const setSnackBar = (enqueueSnackbar, closeSnackbar) => {
  queue.enqueue = enqueueSnackbar;
  queue.close = closeSnackbar;
};

const add = (message) => {
  messages.push(message);
  const {
    type, content, timeoutSec, ...options
  } = message;
  queue.enqueue(content, {
    variant: MessageType[type],
    autoHideDuration: timeoutSec * 1000,
    ...options,
  });
};

const addInfo = (content, timeoutSec = 1) => {
  add({
    type: MessageType.info,
    content,
    timeoutSec,
  });
};

const addSuccess = (content, timeoutSec = 1) => {
  add({
    type: MessageType.success,
    content,
    timeoutSec,
  });
};

const addError = (content, timeoutSec = 5) => {
  add({
    type: MessageType.error,
    content,
    timeoutSec,
  });
};

const addWarning = (content, timeoutSec = 5) => {
  add({
    type: MessageType.warning,
    content,
    timeoutSec,
  });
};

const addMessageSaved = () => {
  addSuccess('Saved');
};

const addMessageSaveFail = () => {
  addError('Failed');
};
export {
  config,
  getMessages,
  setSnackBar,
  add,
  addInfo,
  addSuccess,
  addError,
  addWarning,
  addMessageSaved,
  addMessageSaveFail,
};
