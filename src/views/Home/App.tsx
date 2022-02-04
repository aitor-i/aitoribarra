import React, { Fragment, useState, useEffect } from "react";

import SocialMedia from "../../components/SocialMedia";

import "./../../reset.css";
import { theme, lightTheme } from "../../themes";
import { ThemeProvider } from "styled-components";

import Wrapper from "./App.styled";
import NavBar from "../../components/NavBar";

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
        <NavBar setIsLightTheme={setIsLightTheme} isLightTheme={isLightTheme} />
        <Wrapper>
          <div className="container">
            <div className="title">
              <h1 className="title__name">Aitor</h1>
              <h1 className="title__surname">Ibarra</h1>
            </div>
            <h2 className="subtitle">Developer, Chemist & Photographer</h2>
          </div>
          <SocialMedia theme={isLightTheme ? lightTheme : theme} />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
