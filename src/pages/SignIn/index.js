import React, { useContext } from 'react';


import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Context } from '../../routes/context/AuthContext';
import api from '../../services/api';
import { Container, FormContainer } from './styles';
import logo from '../../assets/logoCadastro.svg';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  async function handleSubmit(e) {
    const userSession = {
      email: e.email,
      password: e.password,
    };

    await handleLogin(userSession);
  }

  return (
    <Container>
      <FormContainer>
        <img alt="Logo-gripp" src={logo} />
        <Form onSubmit={handleSubmit}>
          <Input id="email" name="email" placeholder="Email" type="text" />
          <Input id="password" name="password" class="clientHands" placeholder="Senha" title="Digite sua senha" type="password" />
          <button type="submit">Entrar</button>
          <p>
            Não é cadastrado?
            <Link to="signup"><strong>Cadastre-se Agora!</strong></Link>
          </p>
        </Form>
      </FormContainer>
    </Container>
  );
}
