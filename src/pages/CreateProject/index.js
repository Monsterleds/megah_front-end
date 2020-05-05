import React from 'react';

import {Form, Input} from '@rocketseat/unform';

import { Container, FormContainer, Paleta, Nav, ContainerAux } from './styles';
import logo from '../../assets/gripplogo.png';
import {Link} from 'react-router-dom';


class CreateProject extends React.Component {
  constructor(){
    super();
    this.state = {
      color: 'blue',
    }
  }
  

  handleSubimt(){

  }
  render(){
  

  return (
  <Container>
    <Nav>
            <Link><img id="logo" alt="Logo-gripp" src={logo}/></Link>
                <ul>
                <Link>Inicio</Link>
                <Link>Projetos</Link>
                <Link>
                    {'username'}
                <img id="avatar" alt="avatar" src={'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg'} />
                </Link>
                </ul>
    </Nav>
    <ContainerAux>
    
    <FormContainer>
      <Form>
        <h2>Configurações do Layout</h2>
        <Input name="email" type="text" placeholder="Email (opcional)"/>
        <Input name="phone" type="text" placeholder="Telefone" />
        <Paleta>
          <p>Cor Principal:</p>
        <button id="blue" onClick={function(e){
          e.preventDefault()
          
        }}></button>
        <button id="red" onClick={function(e){
          e.preventDefault()
          console.log('red')
        }}></button>
        <button id="green" onClick={function(e){
          e.preventDefault()
          console.log('green')
        }}></button>
        </Paleta>
        <button id="SubmitButton" type="submit">Enviar</button>
        
        
      </Form>
    </FormContainer>
    </ContainerAux>
  </Container>
    );
  }
}

export default CreateProject;