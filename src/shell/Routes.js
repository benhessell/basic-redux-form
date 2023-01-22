import React from 'react';
import {
  HashRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Home from '../shell/Home.js';
import { FormPage1 } from '../form-pages/FormPage1.js';
import { FormPage2 } from '../form-pages/FormPage2.js';
import { FormPage3 } from '../form-pages/FormPage3.js';
import { FormPage4 } from '../form-pages/FormPage4.js';
import { FormResultPage } from '../form-pages/FormResultPage.js';

export default function Routes() {
  return (
    <div className="routes">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/formpage1">
            <FormPage1 />
          </Route>
          <Route exact path="/formpage2">
            <FormPage2 />
          </Route>
          <Route exact path="/formpage3">
            <FormPage3 />
          </Route>
          <Route exact path="/formpage4">
            <FormPage4 />
          </Route>
          <Route exact path="/formresultpage">
            <FormResultPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}