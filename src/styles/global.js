import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, h2, h1 {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  li {
    list-style: none;
  }

  button, a {
    cursor: pointer;
  }
`;
