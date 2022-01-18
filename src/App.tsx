import React, { Fragment, useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

import "./reset.css";
import { theme, lightTheme } from "./themes";
import { ThemeProvider } from "styled-components";

import Wrapper, { StyledThemeButton } from "./App.styled";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);

  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? lightTheme : theme}>
        <Wrapper>
          <StyledThemeButton
            onClick={() => setIsLightTheme((prevState) => !prevState)}
          >
            {isLightTheme ? <FiMoon /> : <FiSun />}
          </StyledThemeButton>

          <div className="container">
            <div className="title">
              <div className="title__name">Aitor</div>
              <div className="title__surname">Ibarra</div>
            </div>
            <div className="subtitle">Developer, Chemist & Photographer</div>
          </div>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
