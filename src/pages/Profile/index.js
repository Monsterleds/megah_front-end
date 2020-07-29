import React from 'react';
import { FaCamera } from 'react-icons/fa';

import Header from '../../components/Header';

import {
  Container,
  InputImage,
  ProfileContainer,
  FormContainer,
  FormWrapper,
  InputsContainer,
} from './styles';

function Profile() {
  return (
    <Container>
      <Header />
      <form>
        <label htmlFor="batata">
          <input type="file" id="batata" />
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
                <input placeholder="John doe" />
              </div>
              <div>
                <span>CPF/CNPJ</span>
                <input placeholder="999.999.999-99" />
              </div>
            </InputsContainer>

            <InputsContainer>
              <div>
                <span>Email</span>
                <input placeholder="johndoe@gmail.com" />
              </div>
              <div>
                <span>Senha</span>
                <input placeholder="**********" />
              </div>
            </InputsContainer>
          </FormWrapper>
        </FormContainer>
        <button type="submit">Atualizar</button>
      </form>
    </Container>
  );
}

export default Profile;
