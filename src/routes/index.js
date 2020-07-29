import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Projects from '../pages/Projects';
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
      <CustomRoute path="/" component={Index} exact />
      <CustomRoute path="/signin" component={SignIn} exact />
      <CustomRoute path="/signup" component={SignUp} exact />
      <CustomRoute path="/company/create" component={CreateCompany} exact />
      <CustomRoute path="/project/create" component={CreateProject} exact />
      <CustomRoute path="/projects" component={Projects} exact />
      <Route path="/web/:id_company/:id" exact component={templateMain} />
      <Route path="/:id_company/:id_web/product/:id" exact component={templateProduct} />

      <CustomRoute path="/" component={() => <h1>404 Página não encontrada, verifique a url e tente novamente.</h1>} />

    </Switch>
  );
}
