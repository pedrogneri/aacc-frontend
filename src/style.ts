import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    height: 100%;
  }

  #root {
    flex: 1;
    margin: 0 auto;
    width: 100vw;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100%;
    font-family: -apple-system, 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
