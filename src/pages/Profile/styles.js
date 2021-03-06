import styled from 'styled-components';
import { darken } from 'polished';

import Background from '../../assets/createCompanyBG.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${Background}) no-repeat;
  background-size: 85%;
  background-position: top right;
  padding: 0 64px;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 60vw;
    height: 80%;
    min-height: 590px;
    background-color: #fff;
    box-shadow: 2px 2px 6px #4A7BEE;
    padding: 16px 24px;
    border-radius: 32px;

    @media only screen and (max-width: 735px) {
      width: 90vw;
    }

    label {
      display: flex;
      justify-content: center;
      width: 100%;

      input {
        display: none;
      }
    }

    button {
      background-color: #386BDC;
      color: #fff;
      border: 0;
      height: 45px;
      border-radius: 40px;
      width: 160px;
      transition: 0.2s;

      :hover {
        background-color: ${darken(0.2, '#386BDC')};
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 180px;
  width: 30vw;
  max-height: 180px;
  height: 30vw;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.2s;
  }
    
  img {
    height: 100%;
    width: auto;
  }

  
  svg {
    position: absolute;
    visibility: hidden;
    z-index: 10;
  }

  :hover {
    svg {
      visibility: visible;
    }

    div {
      background-color: #9B949491;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 735px) {
    flex-direction: column;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & + div {
    margin: 16px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 90%;

    & + div {
      margin-top: 16px;
    }

    span {
      color: #D1D1D1;
      margin: 0px 0px 8px 8px;
    }

    input {
      width: 100%;
      box-shadow: 0px 3px 6px #51ACEF29;
      border: 0;
      padding: 18px 24px;
      border-radius: 16px;
      color: ${darken(0.2, '#D1D1D1')};

      ::placeholder {
        color: #D1D1D1;
      }
    }
  }
`;
