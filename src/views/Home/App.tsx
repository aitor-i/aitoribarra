import React, { Fragment } from "react";

import SocialMedia from "../../components/SocialMedia";

import "./../../reset.css";
import { theme } from "../../themes";
import { ThemeProvider } from "styled-components";

import Wrapper from "./App.styled";
import NavBar from "../../components/NavBar";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Wrapper>
          <div className="body">
            <div className="title">
              <h1 className="title__name">Aitor</h1>
              <h1 className="title__surname">Ibarra</h1>
            </div>
            <h2 className="subtitle">Developer, Chemist & Photographer</h2>
            <SocialMedia theme={theme} />
          </div>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
