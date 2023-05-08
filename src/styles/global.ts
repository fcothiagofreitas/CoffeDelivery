import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
    width: calc(100vw - 15px);
  }

  body {
    background: ${(props) => props.theme['gray-100']};
  }
  li {
    list-style: none;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-900']};
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', cursive ;
  }
  h2 {
    font-size: 1.25rem;
  }
 

`;
