import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Homepage from './homepage';
import AboutPage from './about-page';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
      </ThemeProvider>
    </React.Fragment>
  )
};

export default App;