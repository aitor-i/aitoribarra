import React, { Fragment, useEffect, useState } from "react";

import GlobalStyles from "../../GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "../../themes";
import Wrapper from "./About.styles";
import StyledParagraph from "../../styles/Paragraph.styles";
import TabView from "../../components/TabView/TabView";

import NavBar from "../../components/NavBar";

const About = () => {
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
          <NavBar
            setIsLightTheme={setIsLightTheme}
            isLightTheme={isLightTheme}
          />

          <GlobalStyles />

          <div className="tab-container">
            <TabView
              tab1="Developer"
              text1={dummyText()}
              tab2="Chemist"
              text2="Text2"
              tab3="Photographer"
              text3="Text3"
            />
          </div>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );

  function dummyText() {
    return `
        I must not fear. Fear is the mind-killer. Fear is the little-death that
        brings total obliteration. I will face my fear. I will permit it to pass
        over me and through me. And when it has gone past I will turn the inner
        eye to see its path. Where the fear has gone there will be nothing. Only
        I will remain.
      `;
  }
};

export default About;
