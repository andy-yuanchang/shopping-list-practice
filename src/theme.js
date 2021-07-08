import { createTheme } from '@material-ui/core/styles';

export const isBrightMode = true;

const theme = createTheme({
  palette: {
    type: isBrightMode ? 'light' : 'dark',
    // type: "light"
    primary: {
      main: isBrightMode ? '#5E6FD9' : '#7B88E6',
    },
    secondary: {
      light: '#3B3CCA',
      main: isBrightMode ? '#167ffc' : '#4E61D4',
      dark: isBrightMode ? '#B6DDF7' : '#3A3F64',
      // #C7CBF5
    },
    success: {
      light: '#81cccc',
      main: isBrightMode ? '#4EB7B6' : 'rgba( 0, 152, 147, 1 )',
      dark: '#046B65',
    },
    error: {
      main: isBrightMode ? '#e57373' : '#E47070',
    },
    background: {
      paper: isBrightMode ? '#fafafa' : '#292B42',
      default: isBrightMode ? '#fafafa' : '#292B42',
      img: isBrightMode ? '#cccccc' : '#cccccc',
      // default: isBrightMode ? "#fafafa" : "#1E1F2F"
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
      // for Self-hosted fonts
      // "@global": {
      //   "@font-face": [notoSansTC]
      // }
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
        // borderBottom: `1px solid ${
        //   isBrightMode ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
        // }`
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
    // "MuiButton-contained":{
    //   "Mui-disabled": {
    //     "background-color": "rgba(78, 97, 212, 0.5)"
    //   }
    // },
  },
});

export default theme;
