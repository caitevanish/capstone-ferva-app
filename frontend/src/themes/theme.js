import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#F3EFD4', //Off white
    },
    primary: {
      main: '#59424C', //dark purple
    },
    secondary: {
      main: '#6FBDCE', //blue
    },
    tertiary: {
      main: '#F5A141', //light orange
    },
    error: {
      main: '#E6551C', //Dark orange
    },

    warning: {
      main: '#D93814', //Dark red
    },

    // success: {
    //   // main: palette.success,
    // },

    action: {
      hover: 'rgba(255, 255, 255, 0.05)',
      selected: '#2D2D358D',
    },

    nav: {
      // main: palette.nav.main,
    },
    sidenav: {
      main: 'rgba(89, 66, 76, 0.75)',
    },

    text: {
      // primary: palette.text.primary,
      // secondary: palette.text.secondary,
    },
  },
});

export default theme;
