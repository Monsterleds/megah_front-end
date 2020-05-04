import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateCompany from '../pages/CreateCompany';
<<<<<<< HEAD
import Index from '../pages/Index';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/company/create" component={CreateCompany} />
        <Route path="/home" component={Index} />
      </Switch>
    </BrowserRouter>
=======
import CreateProject from '../pages/CreateProject';


export default function routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/companies/create" component={CreateCompany} isPrivate />
          <Route path="/projects/create" component={CreateProject} isPrivate />


        </Switch>
      </BrowserRouter>
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
  );
}
