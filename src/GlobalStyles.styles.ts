import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
  
  color:#f2f2f2;
    
  }
  html{
    min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

}

h1{
  font-size: 4rem;
}
`;

export default GlobalStyles;
