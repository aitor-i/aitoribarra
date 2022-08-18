import Wrapper from "./Project.styles";

interface Props {
  image: string;
  alt: string;
  name: string;
  description: string;
}

const Project = ({ image, alt, description, name }: Props) => {
  return (
    <Wrapper>
      <div className="project">
        <img src={image} alt={alt} className="project-photo" />
        <div className="project-name">{name}</div>
        <div className="project-description">{description}</div>
      </div>
    </Wrapper>
  );
};

export default Project;
