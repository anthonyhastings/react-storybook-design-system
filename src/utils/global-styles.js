import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';

export default createGlobalStyle`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${primaryFont};
    font-size: ${(10 / 16) * 100}%;
    height: 100%;
    overflow-y: scroll;
  }
`;
