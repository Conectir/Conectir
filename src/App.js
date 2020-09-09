import React from 'react'
import Home from './containers/Home'
import Auth from './containers/Auth'
import Header from './components/Header'
import Equipment from './containers/Equipment'

import { Switch, Route } from 'wouter'
import { UserProvider } from './contexts/User'

import './assets/css/reset.scss';
import './assets/css/vars.scss';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/equipment" component={Equipment} />
          <Route path="/log" component={Auth} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
