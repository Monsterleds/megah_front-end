import React, { useState, useCallback } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  ProfileContainer,
  FormContainer,
  FormWrapper,
  InputsContainer,
} from './styles';

function Profile() {
  const [profile, setProfile] = useState({});

  // Requisição para alterar
  const handleSubmitForm = useCallback(async (data) => {
    // await api.put('/rotaX', {
    //   data,
    //   profile,
    // });
  }, []);

  return (
    <Container>
      <Header />
      <Form onSubmit={(data) => handleSubmitForm(data)}>
        <label htmlFor="batata">
          <input type="file" id="batata" onChange={(data) => setProfile(data)} />
          <ProfileContainer>
            <div />
            <img src="https://osegredo.com.br/wp-content/uploads/2018/02/pessoas-que-superam-a-depress%C3%A3o-830x450.jpg" alt="" />
            <FaCamera size={30} color="#fff" />
          </ProfileContainer>
        </label>
        <FormContainer>
          <FormWrapper>
            <InputsContainer>
              <div>
                <span>Nome</span>
                <Input name="name" placeholder="John doe" />
              </div>
              <div>
                <span>CPF/CNPJ</span>
                <Input name="cpf" placeholder="999.999.999-99" />
              </div>
            </InputsContainer>

            <InputsContainer>
              <div>
                <span>Email</span>
                <Input name="email" placeholder="johndoe@gmail.com" />
              </div>
              <div>
                <span>Senha</span>
                <Input type="password" name="password" placeholder="**********" />
              </div>
            </InputsContainer>
          </FormWrapper>
        </FormContainer>
        <button type="submit">Atualizar</button>
      </Form>
    </Container>
  );
}

export default Profile;
