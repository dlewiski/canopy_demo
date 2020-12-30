import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './homepage'
import AboutPage from './about-page'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  );
}

export default App