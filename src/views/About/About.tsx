import React, { Fragment, useEffect, useState } from "react";

import GlobalStyles from "../../GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "../../themes";
import Wrapper from "./About.styles";
import TabView from "../../components/TabView/TabView";
import aboutImg from "./../../media/img/about.jpg";

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
          <GlobalStyles />
          <NavBar
            setIsLightTheme={setIsLightTheme}
            isLightTheme={isLightTheme}
          />
          {/* <div className="about-image">
            <img src={aboutImg} alt="" />
          </div> */}
          <TabView
            tab1="Developer"
            text1="I' Developer"
            tab2="Chemist"
            text2="I Love chemistry"
            tab3="Photographer"
            text3="The best photographer"
          />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );

  function dummyText() {
    return (
      <p>
        I must not fear. Fear is the mind-killer. Fear is the little-death that
        brings total obliteration. I will face my fear. I will permit it to pass
        over me and through me. And when it has gone past I will turn the inner
        eye to see its path. Where the fear has gone there will be nothing. Only
        I will remain.
      </p>
    );
  }
};

export default About;
