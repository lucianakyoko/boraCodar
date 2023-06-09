import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.background[100]};
  }

  .app__container {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
  }
`;