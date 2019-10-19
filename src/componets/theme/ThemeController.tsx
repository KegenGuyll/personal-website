import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#64b5f6',
      dark: '#2286c3',
      light: '#9be7ff'
    },
    secondary: {
      main: '#1e88e5',
      dark: '#005cb2',
      light: '#6ab7ff'
    }
  }
});
