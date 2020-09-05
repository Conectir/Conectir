import React from 'react';
import Home from './containers/Home';
import Header from './components/Header';
import Auth from './containers/Auth'

import { Switch, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Log" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
