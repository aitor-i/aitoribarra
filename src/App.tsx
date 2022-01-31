import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SocialMedia from "./components/SocialMedia";
import ThemeButton from "./components/ThemeButton";

import "./reset.css";
import { theme, lightTheme } from "./themes";
import { ThemeProvider } from "styled-components";

import Wrapper from "./App.styled";

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
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <ThemeButton
            setIsLightTheme={setIsLightTheme}
            isLightTheme={isLightTheme}
          />

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
