import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(198, 13, 92)',
    },
    text: {
      primary: 'rgb(170, 169, 169)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h5: {
      fontSize: '1.125rem',
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 'bolder',
    },
  },
  overrides: {
    MuiCssBaseline: {

    },
    MuiTypography: {
      body1: {
        fontSize: '0.875rem',
      },
    },
    MuiTableCell: {
      root: {
        fontSize: '0.75rem',
      },
      sizeSmall: {
        padding: '8px 8px 7px 8px',
      },
      head: {
        fontWeight: '600',
      },
    },
    MuiToggleButtonGroup: {
      root: {
        borderRadius: '1rem',
        margin: '0 0.5rem',
      },
    },
    MuiToggleButton: {
      root: {
        borderRadius: '1rem',
      },
    },
    MuiInputBase: {
      root: {
        fontSize: '0.875rem',
      },
      input: {
        padding: '6.5px 0 7px',
        fontSize: '0.875rem',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '8.5px 14px',
      },
      inputMarginDense: {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
      adornedEnd: {
        paddingRight: '0px',
      },
    },
    MuiStepper: {
      root: {
        paddingBottom: '0.5rem',
      },
    },
    MuiTab: {
      root: {
        minWidth: '120px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 9px) scale(1)',
        fontSize: '0.875rem',
        '&$marginDense': {
          transform: 'translate(14px, 9px) scale(1)',
        },
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '24px 0 16px 0',
        margin: '0px 24px',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '0.875rem',
      },
    },
    MuiFormControl: {
      root: {
        margin: 'none',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '40px',
      },
    },
    MuiIconButton: {
      edgeEnd: {
        marginRight: -12,
        '$sizeSmall&': {
          marginRight: 3,
        },
      },
    },
    MuiDialog: {
      paperWidthSm: {
        'min-width': '400px',
      },
    },
  },
});

export default theme;
