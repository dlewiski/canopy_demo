import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './navbar'
import Homepage from './homepage'
import AboutPage from './about-page'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Fragment>
  );
}

export default App