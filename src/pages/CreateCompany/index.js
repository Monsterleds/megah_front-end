import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import { MdInsertPhoto } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
import {
  Container, Wrapped, Nav, SubmitButton, InputFile, SubTitlePhoto, DropContainer,
} from './styles';

import pencil from '../../assets/pencil.svg';

export default function CreateCompany() {
  const [dataImage, setDataImage] = useState({});

  async function handleSubmit(data) {
    console.log({
      data,
      dataImage,
    });

    /* await api.post('/ALGO', {
      data,
      dataImage, // Dados da imagem
    }); */
  }

  function handleChangeImage(e) {
    console.log(e.target.value);
  }

  function renderDragMessage(isDragActive, isDragReject) {
    if (isDragReject) {
      return <SubTitlePhoto type="error">Não suportado</SubTitlePhoto>;
    }

    if (isDragActive) {
      return <SubTitlePhoto type="success">Solte a imagem aqui</SubTitlePhoto>;
    }

    return (
      <>
        <MdInsertPhoto size="50px" color="#DDDDDD" />
        <SubTitlePhoto>Adicionar foto</SubTitlePhoto>
      </>
    );
  }

  return (
    <Wrapped>
      <Nav>
        <a id="logo">g</a>
        <ul>
          <a>Inicio</a>
          <a>Projetos</a>
          <a>
            username
            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg" />
          </a>
        </ul>
      </Nav>

      <Container>
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

      </Container>

    </Wrapped>
  );
}
