import React, { Fragment, useEffect, useState } from "react";

import GlobalStyles from "../../GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "../../themes";
import Wrapper from "./About.styles";
import TabView from "../../components/TabView/TabView";

import NavBar from "../../components/NavBar";

import { aboutText } from "../../media/text/aboutText";

const About = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <NavBar />

          <GlobalStyles />

          <div className="tab-container">
            <TabView
              tab1="Developer"
              text1={aboutText.developer}
              tab2="Chemist"
              text2={aboutText.chemist}
              tab3="Photographer"
              text3={aboutText.photographer}
            />
          </div>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
};

export default About;
