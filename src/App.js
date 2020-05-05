import React from 'react';

import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Routes from './routes';
import history from './services/history';

import { AuthProvider } from './routes/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </AuthProvider>
  );
}

export default App;
