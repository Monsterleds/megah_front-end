import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  header {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;

    nav {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      h4 {
        color: #fff;
        margin-right: 50px;
        cursor: pointer;
      }

      p {
        color: #fff;
        opacity: 60%;
        margin-right: 50px;
        cursor: pointer;
      }

      p:hover {
        transition: 0.2s;
        opacity: 100%;
      }

      button {
        background-color: #fff;
        color: #50D1F1;
        border: 0;
        border-radius: 50px;
        margin-right: 64px;
        padding: 10px 33px;
      }

      button:hover {
        background-color: #50D1F1;
        transition: 0.3s;
        color: #fff;
      }
    }
  }

  footer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      color: #fefefe;
      margin: 0px 0px 10px 10px;
    }

    img {
      width: 100%;
      position: absolute;
      z-index: -1;
    }
  }
`;

export const IntroductoryText = styled.div`
  margin: 100px 0px 0px 100px;
  max-width: 550px;
  width: 100%;

  h1 {
    color: #212121;
    font-size: 36px;
  }

  button {
    width: 259px;
    height: 48px;
    color: #fff;
    background-color: #F4C8AA;
    border-radius: 50px;
    border: 0;
    font-weight: bold;

    :hover {
      transition: 0.3s;
      background-color: #ECA676;
    }
  }
`;

export const SubTitle = styled.p`
  color: #424242;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const ContentText = styled.p`
  width: 90%;
  color: #5B5B5BBD;
  line-height: 26px;
  margin: 20px 0px 15px 0px;
`;

export const BodyText = styled.div`
  margin-top: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    color: #212121;
    font-size: 36px;
  }

  div {
    width: 50%;
  }

  img {
    width: 60%;
  }
`;

export const ConclusionText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 100px 0px -200px 0px;
  width: 100%;

  img {
    width: 45%;
  }

  div {
    margin-left: 100px;
  }

  h1 {
    color: #212121;
    font-size: 36px;
  }

  button {
    width: 259px;
    height: 48px;
    color: #fff;
    background-color: #50D1F1;
    border-radius: 50px;
    border: 0;
    font-weight: bold;

    :hover {
      transition: 0.3s;
      background-color: #23C4EC;
    }
  }
`;