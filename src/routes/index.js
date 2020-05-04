import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateCompany from '../pages/CreateCompany';

export default function routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/companies/create" component={CreateCompany} isPrivate />
          
        </Switch>
      </BrowserRouter>
  );
}
