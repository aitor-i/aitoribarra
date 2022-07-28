import React from "react";

import NavBar from "../../components/NavBar";

import { ThemeProvider } from "styled-components";
import { theme } from "../../themes";
import Wrapper from "./Projects.styles";

const Projects = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Wrapper>
        <div className="body">
          <h2>Projects 1</h2>
          <div className="project-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              harum ab repellendus consectetur maxime odio repudiandae a dolore
              totam, possimus optio tenetur praesentium reprehenderit magnam cum
              autem doloribus dolorem quasi.
            </p>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Projects;
