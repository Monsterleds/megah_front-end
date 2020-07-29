import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateCompany from '../pages/CreateCompany';
import CreateProject from '../pages/CreateProject';
import Index from '../pages/Index';
import templateMain from '../pages/template/Main';
import templateProduct from '../pages/template/Product';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated, handleToken } = useContext(Context);

  const token = handleToken();

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && authenticated) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} />;
}

export default function routes() {
  return (
    <Switch>
      <CustomRoute path="/" component={Home} exact />
      <CustomRoute path="/signin" component={SignIn} />
      <CustomRoute path="/signup" component={SignUp} />
      <CustomRoute path="/company/create" component={CreateCompany} />
      <CustomRoute path="/project/create" component={CreateProject} />
      <CustomRoute path="/home" component={Index} />
      <CustomRoute path="/s" component={() => <h1>404 Página não encontrada, verifique a url e tente novamente.</h1>} />
      <Route path="/web/:id_company/:id" exact component={templateMain} />
      <Route path="/:id_company/:id_web/product/:id" exact component={templateProduct} />

    </Switch>
  );
}
