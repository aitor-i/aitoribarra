import React, { Fragment } from "react";
import "./reset.css";
import Wrapper from "./App.styled";

function App() {
  return (
    <Fragment>
      <Wrapper>
        <div className="container">
          <div className="title">
            <div className="title__name">Aitor</div>
            <div className="title__surname">Ibarra</div>
          </div>
          <div className="subtitle">Developer, Chemist & Photographer</div>
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default App;
