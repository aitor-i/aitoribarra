import React, { Fragment } from "react";

import "./reset.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

import Wrapper from "./App.styled";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
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
