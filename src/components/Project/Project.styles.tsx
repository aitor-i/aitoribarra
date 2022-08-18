import styled from "styled-components";

const Wrapper = styled.div`
  .project {
    width: 20rem;
    border: 1px solid red;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-photo {
    height: 20rem;
    object-fit: cover;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    cursor: pointer;
  }

  .project-name {
    font-size: 1.7rem;
    color: ${(props) => props.theme.primaryColor};
  }

  .project-description {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default Wrapper;
