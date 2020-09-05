import React from 'react';
import Home from './containers/Home';
import Header from './components/Header';
import { Switch, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
