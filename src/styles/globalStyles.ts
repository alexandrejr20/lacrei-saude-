import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, #__next { height: 100%; }
body { 
  margin: 0; 
  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; 
  background: ${(p) => p.theme.colors.bg}; 
  color: ${(p) => p.theme.colors.text}; 
}
a { color: inherit; }
:focus { 
  outline: 3px solid rgba(38, 192, 89, 0.35); 
  outline-offset: 2px; 
}
`;

export default GlobalStyle;
