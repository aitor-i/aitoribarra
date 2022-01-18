import React, { Fragment, useState } from "react";

import "./reset.css";
import { theme, lightTheme } from "./themes";
import { ThemeProvider } from "styled-components";

import Wrapper from "./App.styled";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);

  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? lightTheme : theme}>
        <Wrapper>
          <div className="button">
            <button
              onClick={() => setIsLightTheme((prevState) => !prevState)}
            />
          </div>
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
