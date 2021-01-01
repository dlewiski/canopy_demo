import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import theme from './Theme';
import Navbar from './navbar';
import Homepage from './pages/homepage';
import ProductsPage from './pages/products-page';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid style={{ marginTop: '100px' }}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="*">
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          </Route>{' '}
        </Switch>
      </Grid>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
