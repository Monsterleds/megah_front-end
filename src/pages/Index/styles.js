import styled from 'styled-components';

import indexBG from '../../assets/indexBG.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-position: right top;
  background-image: url(${indexBG});
  background-size: 83%;
  background-repeat: no-repeat;

  footer {
    width: 100%;
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

export const Content = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Logo = styled.div`
  img {
    margin: -20px 0px 0px 150px;
  }
`;
