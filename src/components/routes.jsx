import React from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Scales from './Scales/IndexPage';
import NeckSvg from './NeckSvg';
import App from './App';

import {
  Route,
} from 'react-router'

const routes = (
  <Route component={App}>
    <Route path="/" component={FirstPage}/>
    <Route path="/second" component={SecondPage} />
    <Route path="/neck" component={NeckSvg} />
    <Route path="/scales" component={Scales} />
  </Route>
);

export { routes };
