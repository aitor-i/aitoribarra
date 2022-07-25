import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

interface Props {
  theme: ThemeType;
}

const GlobalStyles = createGlobalStyle`
body{
  
    
  }
  html{
    min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

}
`;

export default GlobalStyles;
