import React from 'react';

import homeBodyBG from '../../assets/homeBodyBG.png';
import backgroundImage from '../../assets/homeBG2.png';
import homeFooterBG from '../../assets/homeFooterBG.svg';
import homeConclusionBG from '../../assets/homeConclusionBG.png';

import { 
Container,
Content,
BackgroundImage,
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
        <BackgroundImage>
          <img src={backgroundImage}/>
        </BackgroundImage>
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
            <img src={homeBodyBG} alt="Imagem body"/>
            <div>
              <h1>Plataforma com rapidez e segurança</h1>
              <ContentText>Não se preocupe com a segurança da sua plataforma online, nossa equipe de engenheiros e arquitetos já cuidou de tudo isso para você, de forma que não terá que se preocupar com nada em programação ou qualquer preocupação.</ContentText>
              <ContentText>Caso precise de auxílio para implementar sua loja online, pode falar conosco no chat que teremos o maior prazer em te ajudar.</ContentText>
            </div>
          </BodyText>
          <ConclusionText>
            <div>
              <h1>Métricas e Análises</h1>
              <ContentText>Um dos maiores pontos para se ter um negócio de sucesso, tanto no ambiente físico quanto o online, é a medição das métricas, saber onde precisa melhorar, como melhorar, qual horário da mais movimento e qual produto da mais lucro.</ContentText>
              <button>Iniciar</button>
            </div>
            <img src={homeConclusionBG}/>
          </ConclusionText>
        </Texts>
        <footer>
          <p>Gripp. Copyright © 2020</p>
          <img src={homeFooterBG}/>
        </footer>
      </Content>
    </Container>
  );
}
