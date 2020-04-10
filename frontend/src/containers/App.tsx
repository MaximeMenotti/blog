import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import CityContainer from './CityContainer';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/city/:id" component={CityContainer} exact />
      </Switch>
    </div>
  );
}

export default App;
