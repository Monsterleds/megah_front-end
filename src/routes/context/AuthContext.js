import React, { createContext, useState, useEffect } from 'react';

import history from '../../services/history';

import api from '../../services/api';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const { data: { token } } = await api.post('/sessions', {
        email,
        password,
      });
      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `bearer ${token}`;
    } catch (err) {
      return alert('Email ou senha incorretos.');
    }
    setAuthenticated(true);
    return history.push('/home');
  }

  async function handleLogout() {
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    setAuthenticated(false);

    history.push('/');
  }

  function handleToken() {
    return localStorage.getItem('token');
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Context.Provider value={{
      authenticated, handleLogin, handleLogout, handleToken,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
