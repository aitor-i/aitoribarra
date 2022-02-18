import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

interface props {
  theme: ThemeType;
}

const GlobalStyles = createGlobalStyle`
  html{
  height: 100%;
  overflow-y:auto ;
  overflow-x: hidden;
  
  }
body{
  height: 100%;
    
  }
#root{
  height: 100%;
}

@media screen and (max-width: 700px) {
   html{
    height: calc(100% + 25vh);

   }
  }
`;

export default GlobalStyles;
