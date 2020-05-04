import React from 'react';

import { Container, Wrapped, Nav } from './styles';
import {Form, Input} from '@rocketseat/unform';
import {Link} from 'react-router-dom';
import logo from '../../assets/gripplogo.png';



class CreateCompany extends React.Component{
    render(){
        function handleSubmit(data) {
            console.log(data);
          }
  return (

    <Wrapped>
        <Nav>
            <Link id="logo"><img alt="Logo" src={logo} /></Link>
                <ul>
                <Link>Inicio</Link>
                <Link>Projetos</Link>
                <Link>
                    {'username'}
                <img id="avatar" alt="Avatar" src={'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg'} />
                </Link>
                </ul>
        </Nav>
        
    <Container>
        <Form onSubmit={handleSubmit}>
            <h1>Crie sua marca</h1>
            <Input name="name" type="text" placeholder="Nome da Marca" />
            <Input name="description" type="text" placeholder="Descrição da Marca" />
            <Input name="img_url" type="file"/>
            <input id="btn" className="input" type="submit" />
        </Form>
        
    </Container>
    
    </Wrapped>
  )
    }
}

export default CreateCompany;