import { createMuiTheme } from '@material-ui/core';
import HelveticaNeueFont from "./assets/Helvetica-Neue.ttf";

const HelveticaNeue = {
    fontFamily: "HelveticaNeue",
    fontStyle: "normal",
    fontWeight: 500,
    src: `
      local('Helvetica-Neue'),
      url(${HelveticaNeueFont}) format('truetype')
    `
  };

const base = {
    palette: {
        primary: {
            main: 'rgba(25, 25, 25, 1)',
        },
        secondary: {
            main: '#FFC017',
        },
        common: {
            white: '#ffffff',
        },
        text: {
            main: '#121212',
            secondary: '#777777',
        },
    },
    typography: {
        h1: {
            fontSize: '55px',
            fontFamily: 'InterBold',
            color: '#121212',
            fontWeight: 'bold',
        },
        body2: {
            fontSize: '14px',
            fontWeight: '400',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '20px',
            letterSpacing: '0.38px',
            fontFamily:'HelveticaNeue'
          },
    },
};

var theme = createMuiTheme(base);

theme = {
    ...theme,

    overrides: {
        MuiCssBaseline: {
            "@global": {
              "@font-face": [HelveticaNeue]
            }
        },
        MuiTypography: {
            color: '#121212',
        },
        MuiButton: {
            root: {
              fontSize: '14px',
              fontWeight: '400',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: '20px',
              letterSpacing: '0.45px',
              textAlign: 'center',
              fontFamily:'inherit',
              textTransform: 'capitalize',
              padding: '7px 16px 9px',
            },
      
          },
    },
};

export default theme;