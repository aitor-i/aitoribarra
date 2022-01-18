import React, { Fragment } from "react";

import "./reset.css";
import { theme, lightTheme } from "./themes";
import { ThemeProvider } from "styled-components";

import Wrapper from "./App.styled";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <Wrapper>
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
