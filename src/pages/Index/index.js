import React from 'react';

import footerBG from '../../assets/footer.svg';
import logo from '../../assets/logo.svg';

import { Container, Content, Logo } from './styles';

export default function Index() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} />
        </Logo>
        <footer>
          <p>
            Gripp. Copyright © 2020
          </p>
          <img src={footerBG} alt="footer" />
        </footer>
      </Content>
    </Container>
  );
}
