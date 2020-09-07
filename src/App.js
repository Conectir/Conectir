import React from 'react'
import Home from './containers/Home'
import Auth from './containers/Auth'
import Header from './components/Header'
import Equipment from './containers/Equipment'

import { Switch, Route } from 'wouter'

import './assets/css/reset.scss';
import './assets/css/vars.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/log" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
