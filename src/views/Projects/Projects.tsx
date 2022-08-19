import NavBar from "../../components/NavBar";

import ibarraPhotoImg from "../../media/img/ibarra-photo.jpg";
import Project from "../../components/Project/Project";

import { ThemeProvider } from "styled-components";
import { theme } from "../../themes";
import Wrapper from "./Projects.styles";

const Projects = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Wrapper>
        <div className="body">
          <div className="project-container">
            <Project
              image={ibarraPhotoImg}
              alt="ibarra photo web page screenshot"
              description="MERN stack project for professional photographs sharing"
              name="Ibarra Photo"
              pageLink="https://ibarraphoto.me"
              repoLink="https://github.com/ibarra-photography"
            />
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Projects;
