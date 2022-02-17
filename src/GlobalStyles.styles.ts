import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

interface props {
  theme: ThemeType;
}

const GlobalStyles = createGlobalStyle`
body{
  
    
  }
  html{
  overflow-x: hidden;

}
`;

export default GlobalStyles;
