import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { MdInsertPhoto } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import Header from '../../components/Header';

import history from '../../services/history';
import api from '../../services/api';

import pencil from '../../assets/pencil.svg';

import {
  Content, Container, SubmitButton, SubTitlePhoto, DropContainer,
} from './styles';


export default function CreateCompany() {
  const [dataImage, setDataImage] = useState({});

  async function handleSubmit(data) {
    try {
      /** Converte os dados do tipo padrão do file para o multipart/form-data,
       *  assim tornando a adição de imagens possível */
      const fd = new FormData();

      fd.append('action', 'ADD');
      fd.append('param', 0);
      fd.append('secondParam', 0);
      fd.append('file', dataImage[0]);

      await api.post('/companies', {
        name: data.name,
        description: data.name,
        img_url: null,
        fd, // Dados da imagem
      });
    } catch (err) {
      return history.push('/home');
    }
  }

  function handleDragMessage(data) {
    if (data) {
      return (
        <>
          <MdInsertPhoto size="50px" color="#DDDDDD" />
          <SubTitlePhoto>{dataImage[0].name}</SubTitlePhoto>
        </>
      );
    }
  }
  function renderDragMessage(isDragActive, isDragReject) {
    if (isDragReject) {
      return <SubTitlePhoto type="error">Não suportado</SubTitlePhoto>;
    }

    if (isDragActive) {
      return <SubTitlePhoto type="success">Solte a imagem aqui</SubTitlePhoto>;
    }

    try {
      if (dataImage[0].name) {
        return handleDragMessage(1);
      }
    } catch (err) {
      return (
        <>
          <MdInsertPhoto size="50px" color="#DDDDDD" />
          <SubTitlePhoto>Adicionar foto</SubTitlePhoto>
        </>
      );
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Crie sua marca</h1>
          <div>
            <img src={pencil} alt="pencil" />
          </div>
          <Input name="name" type="text" placeholder="Nome da Marca" />
          <div>
            <img src={pencil} alt="pencil" />
          </div>
          <Input name="description" type="text" placeholder="Descrição da Marca" />
          <Dropzone
            accept="image/*"
            onDropAccepted={(data) => {
              setDataImage(data);
            }}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragReject,
            }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                {renderDragMessage(isDragActive, isDragReject)}
                <input {...getInputProps()} id="img" name="img_url" type="file" />
              </DropContainer>
            )}
          </Dropzone>
          <SubmitButton>
            Enviar
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
