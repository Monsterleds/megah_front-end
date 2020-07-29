import styled, { css } from 'styled-components';

import Background from '../../assets/createCompanyBG.svg';

export const Container = styled.div`
  display: flex;
  background: url(${Background}) no-repeat;
  background-size: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 64px;
  width: 100%;

  h1 {
    color: #fff;

    @media only screen and (max-width: 735px) {
      color: #A9A9A9;
    }
  }
`;

export const Menu = styled.div.attrs((props) => ({
  isOpen: props.isOpen,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;
  background-color: #1A469F;
  padding: 0px 16px;

  @media only screen and (max-width: 735px) {
    position: fixed;
    visibility: hidden;
    z-index: 10;
    top: 0;
    left: -300px;
    transition: 0.5s;

    ${(props) => props.isOpen && css`
      visibility: visible;
      left: 0;
    `}
  }

  img {
    height: 70px;
    width: auto;
  }

  ul {
    margin-top: 32px;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      background-color: #002777;
      color: #fff;
      padding: 10px 20px;
      border-radius: 54px;
      cursor: pointer;

      & + li {
        margin-top: 4px;
      }

      svg {
        margin-bottom: 3px;
      }

      a {
        font-weight: 700;
        margin-left: 18px;
      }
    }
  }
`;

export const ListProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(294px, 1fr));
  grid-gap: 20px;
  margin-top: 32px;
  width: 100%;

  @media only screen and (max-width: 735px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 294px;
  width: 100vw;
  height: 100vw;
  max-height: 237px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  :last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ECECEC;
    border: 1px solid #707070;
  }

  img {
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 60px;
    color: #DBDBDB;
    background-color: #FFFFFF20;
    bottom: 0;
    text-align: center;
  }
`;

export const MenuBackground = styled.div.attrs((props) => ({
  isOpen: props.isOpen,
}))`

@media only screen and (max-width: 735px){
  ${(props) => props.isOpen && css`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #00000090;
    z-index: 5;
  `}
}
`;

export const ResponsiveIcon = styled.div`
  visibility: hidden;
  cursor: pointer;
  position: fixed;
  margin: 20px 0px 0px 20px;

  @media only screen and (max-width: 735px) {
    visibility: visible;
  }
`;
