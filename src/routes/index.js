import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateCompany from '../pages/CreateCompany';
import Index from '../pages/Index';

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
      <CustomRoute path="/company/create" component={CreateCompany} isPrivate />
      <CustomRoute path="/home" component={Index} isPrivate />
      <CustomRoute path="/s" component={() => <h1>404 Página não encontrada, verifique a url e tente novamente.</h1>} />
    </Switch>
  );
}
