import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdEmail, MdPhone } from 'react-icons/md';

import useHistory from '../../services/history';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  FormContainer,
  SubmitButton,
} from './styles';

export default function CreateProject() {
  const [color, setColor] = useState('');

  const handleSubmit = async (data) => {
    try {
      await api.post('/name_of_route', {
        data,
        color,
      });

      useHistory.push('/projects');
    } catch (err) {
      alert('deu merda');
    }
  };

  return (
    <Container>
      <Header />
      <FormContainer>
        <Form onSubmit={(data) => handleSubmit(data)}>
          <h2>Configurações do Layout</h2>
          <label htmlFor="email">
            <MdEmail />
            <Input id="email" name="email" type="text" placeholder="Email (opcional)" />
          </label>
          <label htmlFor="phone">
            <MdPhone />
            <Input id="phone" name="phone" type="text" placeholder="Telefone" />
          </label>
          <div>
            <p>Cor Principal:</p>
            <button type="button" onClick={() => setColor('red')} />
            <button type="button" onClick={() => setColor('blue')} />
            <button type="button" onClick={() => setColor('green')} />
          </div>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
