import React from 'react';

import homeBodyBG from '../../assets/homeBodyBG.png';
import homeFooterBG from '../../assets/homeFooterBG.svg';

import { 
Container,
Content,
SubTitle,
ContentText,
IntroductoryText,
BodyText,
ConclusionText,
Texts,

} from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <header>
          <nav>
            <h4>Home</h4>
            <p>Entrar</p>
            <button>
              Cadastrar
            </button>
          </nav>
        </header>
        <Texts>
          <IntroductoryText>
            <h1>TRANSFORME SUA EMPRESA EM NEGÓCIO DIGITAL</h1>
            <SubTitle>Simples, fácil e eficiente</SubTitle>
            <ContentText>Você já pensou em transformar sua empresa em um negócio digital? De forma simples fácil e eficiente? Poisé, você está no local certo, a maioria das pessoas pensa que isso pode ser muito difícil, mas nós estamos aqui para te mostrar o contrário, confira.</ContentText>
            <button>Começar Agora!</button>
          </IntroductoryText>
          <BodyText>
            <img src={homeBodyBG}/>
            <div>
              <h1>Plataforma com rapidez e segurança</h1>
              <ContentText>Não se preocupe com a segurança da sua plataforma online, nossa equipe de engenheiros e arquitetos já cuidou de tudo isso para você, de forma que não terá que se preocupar com nada em programação ou qualquer preocupação.</ContentText>
              <ContentText>Caso precise de auxílio para implementar sua loja online, pode falar conosco no chat que teremos o maior prazer em te ajudar.</ContentText>
            </div>
          </BodyText>
          {/*
          <ConclusionText>
            <h1>Lorem ipsum dolor sit amet</h1>
            <ContentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ContentText>
            <button>Iniciar</button>
          </ConclusionText>*/}
        </Texts>
        <footer>
          <p>Gripp. Copyright © 2020</p>
          <img src={homeFooterBG}/>
        </footer>
      </Content>
    </Container>
  );
}
