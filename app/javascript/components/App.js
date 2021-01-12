import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import theme from './Theme';
import Navbar from './navbar';
import Homepage from './pages/homepage';
import ProductsPage from './pages/products-page';
import AccountPage from './pages/account-page';
import MyPortfolioPage from './pages/my-portfolio-page';
import Footer from './footer';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Grid style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Grid
          style={{
            minHeight: '65vh',
            margin: '130px 0 30px',
            display: 'flex',
            padding: '0 30px',
          }}
        >
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/my-portfolio" component={MyPortfolioPage} />
            <Route path="*">
              <Redirect
                to={{
                  pathname: '/',
                }}
              />
            </Route>{' '}
          </Switch>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
