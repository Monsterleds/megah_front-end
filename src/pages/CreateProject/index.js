import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdEmail, MdPhone } from 'react-icons/md';

import Header from '../../components/Header';

import {
  Container,
  FormContainer,
  SubmitButton,
} from './styles';

export default function CreateProject() {
  const [color, setColor] = useState('');

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

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
            <button type="button" />
            <button type="button" />
            <button type="button" />
          </div>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
