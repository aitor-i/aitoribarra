import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

interface props {
  theme: ThemeType;
}

const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props: props) => props.theme.backgroundColor};
   
}
`;

export default GlobalStyles;
