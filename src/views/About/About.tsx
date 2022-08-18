import React, { Fragment } from "react";

import GlobalStyles from "../../GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes";
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
              tab1="Frontend"
              text1={aboutText.developer}
              tab2="Testing"
              text2={aboutText.chemist}
              tab3="Backend"
              text3={aboutText.photographer}
            />
          </div>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
};

export default About;
