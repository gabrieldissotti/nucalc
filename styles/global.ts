import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.primary};
    color: ${colors.black};
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-weight: 400;
  }

  textarea, input, button { 
    border: none; 
    outline: none; 
  }
`;

