import React from 'react';

import { Container, Li } from './styles';

function Header() {
  const urlAtual = window.location.href.split('/')[3];

  return (
    <Container>
      <ul>
        <Li isSelected={urlAtual === 'projects' && true}>Projetos</Li>
        <Li isSelected={urlAtual === 'batata' && true}>
          User
          <div>
            <p>foto</p>
          </div>
        </Li>
      </ul>

    </Container>
  );
}

export default Header;
