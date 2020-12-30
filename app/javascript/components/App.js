import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme';
import { Switch, Route } from 'react-router-dom'
import Navbar from './navbar'
import Homepage from './homepage'
import AboutPage from './about-page'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
    </ThemeProvider>
  );
}

export default App