/** @format */

import {createMuiTheme} from '@material-ui/core/styles'
import {color} from './color'
const defaultTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto'].join(','),
    h1: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
    body2: {
      fontSize: '0.98rem',
    },
  },
  spacing: 4,
}

export const theme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: 'light',
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
  },
})
