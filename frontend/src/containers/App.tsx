import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/category/:id" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
