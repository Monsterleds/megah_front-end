import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateCompany from '../pages/CreateCompany';
import Index from '../pages/Index';
import templateMain from '../pages/template/Main';
import templateProduct from '../pages/template/Product';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/company/create" component={CreateCompany} />
        <Route path="/home" component={Index} />
        <Route path="/web/:id_company/:id" exact component={templateMain} />
        <Route path="/:id_company/:id_web/product/:id" exact component={templateProduct} />

      </Switch>
    </BrowserRouter>
  );
}
