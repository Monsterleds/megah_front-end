import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/gripplogo.png';

import { Container, Li } from './styles';

function Header() {
  const urlAtual = window.location.href.split('/')[3];

  return (
    <Container>
      <img src={logo} alt="logo" />
      <ul>
        <Li isSelected={urlAtual === 'projects' && true}><Link to="/projects">Projetos</Link></Li>
        <Li isSelected={urlAtual === 'profile' && true}>
          <Link to="/profile">
            User
            <div>
              <p>foto</p>
            </div>
          </Link>
        </Li>
      </ul>
    </Container>
  );
}

export default Header;
