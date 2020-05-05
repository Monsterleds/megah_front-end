import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import history from '../../services/history';

import logo from '../../assets/logoCadastro.svg';
import user from '../../assets/user.svg';
import groupImage from '../../assets/group.svg';
import lockImage from '../../assets/cadeado.png';
import envelopeImage from '../../assets/email.png';

import {
  Container,
  Content,
  InputEmail,
  InputPassword,
  InputName,
  InputRegister,
  InputConfirmPassword,
  Form,
  Input,
  SubmitButton,
  ContentForm,
  FirstColumn,
  SecondColumn,
  SignUpTexts,
  RadioButtons,
} from './styles';

export default function SignUp() {
  const [register, setRegister] = useState('');


  // Dados para requisição
  const [name, setName] = useState(''); // Nome
  const [email, setEmail] = useState(''); // Email
  const [boolRegister, setBoolRegister] = useState(''); // 0 CPF ou 1 CNPJ
  const [password, setPassword] = useState(''); // Senha
  const [registerNumber, setRegisterNumber] = useState(''); // Numero do CPF/CNPJ
  // Fim dos dados para a requisição

  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setRegister('CPF/CNPJ');
  }, []);

  function changeInput(number) {
    if (number === 1) {
      setBoolRegister(number);
      return setRegister('CNPJ');
    }

    setBoolRegister(number);
    return setRegister('CPF');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Se a senha não for igual ao confirma senha vai dar pau
    if (password !== confirmPassword) {
      return alert('Senha não corresponde.');
    }

    // Se ele não selecionou tanto o CPF quanto CNPJ
    if (!boolRegister && boolRegister !== 0) {
      return alert('Selecione CPF ou CNPJ.');
    }

    await api.post('/users', {
      username: name,
      email,
      password,
      CPForCNPJ: registerNumber,
      PJ: boolRegister,
    });

    return history.push('/signin');
  }

  function handleInputChangeName(e) {
    setName(e.target.value);
  }

  function handleInputChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleInputChangeRegisterNumber(e) {
    setRegisterNumber(e.target.value);
  }

  function handleInputChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleInputChangeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <img src={logo} alt="logo" />
          <ContentForm>
            <FirstColumn>
              <InputName>
                <img src={user} alt="userImage" />
                <Input onChange={handleInputChangeName} placeholder="Nome" type="text" />
              </InputName>
              <InputPassword>
                <img src={lockImage} alt="lockedImage" />
                <Input onChange={handleInputChangePassword} placeholder="Senha" type="password" minLength="8" />
              </InputPassword>
              <InputRegister>
                <RadioButtons>
                  <input type="radio" name="registerOption" id="cpf" onClick={() => changeInput(0)} />
                  <label htmlFor="cpf">CPF</label>
                  <input type="radio" name="registerOption" id="cnpj" onClick={() => changeInput(1)} />
                  <label htmlFor="cnpj">CNPJ</label>
                </RadioButtons>
                <img src={groupImage} alt="userImage" />
                <Input placeholder={register} type="text" onChange={handleInputChangeRegisterNumber} />
              </InputRegister>
            </FirstColumn>
            <SecondColumn>
              <InputEmail>
                <img src={envelopeImage} alt="envelopeImage" />
                <Input placeholder="Email" type="email" onChange={handleInputChangeEmail} />
              </InputEmail>
              <InputConfirmPassword>
                <img src={lockImage} alt="lockedImage" />
                <Input placeholder="Confirmação de Senha" type="password" onChange={handleInputChangeConfirmPassword} />
              </InputConfirmPassword>
              <SubmitButton>Cadastrar</SubmitButton>
              <SignUpTexts>
                <p>Possuí uma conta?</p>
                <Link to="signin"><h5>Logue Agora!</h5></Link>
              </SignUpTexts>
            </SecondColumn>
          </ContentForm>
        </Form>
      </Content>
    </Container>
  );
}
