import styled from 'styled-components';

export const Container = styled.div`
  background: transparent linear-gradient(118deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 70%;
  height: 85%;
  padding: 32px 32px 10px 32px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  border-radius: 16px;

  img {
    height: 20%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 57px;
  margin-bottom: 32px;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px 3px 6px #51ACEF;

  ::placeholder {
    color: #9B9B9B;
  }
`;

export const InputName = styled.div`
  width: 100%;
  
  img {
    height: 25px;
    margin: 15px 0px 0px 20px;
  }
`;

export const InputEmail = styled.div`
  width: 100%;

  img {
    height: 20px;
    margin: 17px 0px 0px 17px;
  }
`;

export const InputPassword = styled.div`
  width: 100%;

  img {
    height: 30px;
    margin: 11px 0px 0px 17px;
  }
`;

export const InputConfirmPassword = styled.div`
  width: 100%;

  img {
    height: 30px;
    margin: 11px 0px 0px 17px;
  }
`;

export const InputRegister = styled.div`
  width: 100%;

  img {
    height: 20px;
    margin: 17px 0px 0px 17px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  width: 195px;
  height: 46px;
  opacity: 80%;
  color: #fff;
  background-image: linear-gradient(135deg, #50D1F1 0%, #535CEB 100%);
  border-radius: 50px;
  border: 0;
  box-shadow: 0px 3px 6px #00000042;
  transition: 0.2s;

  :hover {
    opacity: 100%;
    transition: 0.2s;
  }
`;

export const ContentForm = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    position: absolute;
  }
`;

export const FirstColumn = styled.div`
  width: 100%;
  padding: 32px 32px 0px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SecondColumn = styled.div`
  padding: 32px 32px 0px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SignUpTexts = styled.div`
  font-size: 14px;
  color: #8F8F8F;
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;

  h5 {
    margin-left: 10px;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    cursor: pointer;

    :hover {
      color: #000;
    }
  }
`;

export const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #5B5B5BBD;

  input[type='radio'] {
    display: none;
  }

  label {
    margin-right: 20px;
    cursor: pointer;
  }
`;
