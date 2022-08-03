import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: Inter, sans-serif;
  }
  body{
    background: ${({ theme }) => theme.colors.cream};
    width: 80%;
    margin: auto;
  }
`;