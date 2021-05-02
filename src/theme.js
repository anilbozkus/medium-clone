import { createMuiTheme } from '@material-ui/core';

const base = {
    palette: {
        primary: {
            main: '#D12646',
        },
        secondary: {
            main: '#8898aa',
        },
        common: {
            white: '#ffffff',
        },
        shape: {
            borderRadius: 4,
        },
        iconColor: {
            main: '#172b4d',
        },
        borderColor: {
            main: '#DDDDDD',
        },

        background: {
            main: '#D12646',
            secondary: '#2E2E2E',
            containedPrimary: '#2E2E2E',
            containedSecondary: '#D12646',
            outlinedSecondary: '#ffffff',
            outlinedPrimary: '#D12646',
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
    },
};

var theme = createMuiTheme(base);

theme = {
    ...theme,
    
    overrides: {
        MuiTypography: {
            color: '#121212',
        },
    },
};

export default theme;