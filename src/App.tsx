import React, { Fragment, useState, useEffect } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

import Footer from "./components/SocialMedia";

import "./reset.css";
import { theme, lightTheme } from "./themes";
import { ThemeProvider } from "styled-components";

import Wrapper, { StyledThemeButton } from "./App.styled";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<Boolean>(
    () => window.localStorage.getItem("isLightTheme") === "true" || false
  );
  useEffect(() => {
    window.localStorage.setItem("isLightTheme", isLightTheme.toString());
  }, [isLightTheme]);
  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? lightTheme : theme}>
        <Wrapper>
          <StyledThemeButton
            onClick={() => setIsLightTheme((prevState) => !prevState)}
          >
            {isLightTheme ? (
              <FiSun size={"1.5rem"} />
            ) : (
              <FiMoon size={"1.5rem"} />
            )}
          </StyledThemeButton>

          <div className="container">
            <div className="title">
              <div className="title__name">Aitor</div>
              <div className="title__surname">Ibarra</div>
            </div>
            <div className="subtitle">Developer, Chemist & Photographer</div>
          </div>
          <Footer theme={isLightTheme ? lightTheme : theme} />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
