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
});
