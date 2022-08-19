import { useState } from "react";

import Wrapper from "./Project.styles";

interface Props {
  image: string;
  alt: string;
  name: string;
  description: string;
  pageLink: string;
  repoLink: string;
}

const Project = ({
  image,
  alt,
  description,
  name,
  pageLink,
  repoLink,
}: Props) => {
  return (
    <Wrapper>
      <div className="project">
        <div className="image-container">
          <img src={image} alt={alt} className="project-photo" />

          <div className="project-image-overlay">
            <a href={pageLink} target="_blank" rel="noreferrer">
              Visit the page
            </a>
            <a href={repoLink} target="_blank" rel="noreferrer">
              Watch repo
            </a>
          </div>
        </div>
        <div className="project-name">{name}</div>
        <div className="project-description">{description}</div>
      </div>
    </Wrapper>
  );
};

export default Project;
