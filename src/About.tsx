import React, { Fragment, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "./themes";

import NavBar from "./components/NavBar";
import ThemeButton from "./components/ThemeButton";

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
        <NavBar />
        <ThemeButton
          isLightTheme={isLightTheme}
          setIsLightTheme={setIsLightTheme}
        />
      </ThemeProvider>
    </Fragment>
  );
};

export default About;
