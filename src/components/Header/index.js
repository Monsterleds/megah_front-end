import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Li } from './styles';

function Header() {
  const urlAtual = window.location.href.split('/')[3];

  return (
    <Container>
      <ul>
        <Li isSelected={urlAtual === 'projects' && true}><Link to="/projects">Projetos</Link></Li>
        <Li isSelected={urlAtual === 'batata' && true}>
          <Link to="/projects">
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
