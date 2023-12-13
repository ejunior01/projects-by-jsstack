import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
}

button {
    cursor: pointer;
    background: transparent;
    border: none;
}

body {
  background-color: ${({ theme }) => theme.color.blue[50]};
  font-size:1rem;
  color: ${({ theme }) => theme.color.gray[900]};
}
`;
