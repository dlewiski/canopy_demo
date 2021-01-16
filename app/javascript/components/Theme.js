import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#33b085',
    },
    green: {
      light: '#e3f5ea',
      medium: '#6fca96',
      dark: '#006f62',
    },
    yellow: {
      light: '#fdf6d9',
      medium: '#6fca96',
      dark: '#f1bd00',
    },
    orange: {
      medium: '#f39659',
      dark: '#ea6600',
    },
    blue: {
      light: '#f1bd00',
      medium: '#009cbd',
      dark: '#1e22aa',
    },
    text: {
      primary: '#002f6c',
    },
  },
  typography: {
    fontFamily: 'Encode Sans',
    h6: {
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xl: 1350,
      lg: 1150,
      md: 830,
      sm: 600,
      xs: 300,
    },
  },
});
