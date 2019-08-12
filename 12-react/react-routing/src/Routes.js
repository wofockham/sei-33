import React from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import FAQ from './components/FAQ';

// Not a functional component. It's just a collection of JSX.
const Routes = (
  <HashRouter>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/faq" component={ FAQ } />
    </div>
  </HashRouter>
);

export default Routes;
