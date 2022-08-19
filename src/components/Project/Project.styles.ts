import styled from "styled-components";

const Wrapper = styled.div`
  .project {
    position: absolute;
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

  .image-container {
    width: 20rem;
    height: 20rem;
  }
  .project-photo {
    height: 100%;
    object-fit: cover;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    cursor: pointer;
  }

  .project-image-overlay {
    height: 100%;
    background: rgba(255, 255, 255, 0.35);
    width: 100%;
    border-radius: 10px;
    content: "";
    position: relative;
    z-index: 10;
    top: -20.3rem;
    position: relative;
    z-index: 10;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(3px);
    opacity: 0;
  }

  .project-image-overlay:hover {
    animation: fadeIn 600ms;
    opacity: 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.2rem;
  }
  a:hover {
    color: ${(props) => props.theme.secondaryColor};
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
