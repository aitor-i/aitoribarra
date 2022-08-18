import NavBar from "../../components/NavBar";

import ibarraPhotoImg from "../../media/img/ibarra-photo.jpg";

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
            <div className="project">
              <img
                src={ibarraPhotoImg}
                alt="ibarra photo web page screenshot"
                className="project-photo"
              />
              <div className="project-name">Ibarra Photo</div>
              <div className="project-description">
                MERN stack project for professional photographs sharing{" "}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Projects;
