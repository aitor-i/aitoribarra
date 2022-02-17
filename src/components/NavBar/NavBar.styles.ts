import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    position: fixed;
    z-index: 100;
    top: 30px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 0.3rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
    font-size: ${(props) => props.theme.subtitleSize};

    &:active {
      transition: transform 0.1s ease-in;
      color: ${(props) => props.theme.secondaryColor};
    }
    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  .container-small {
    a {
      color: #020202;
    }
    &_button {
      position: fixed;
      top: 24px;
      right: 24px;
      cursor: pointer;
      z-index: 150;
    }
    &_elements {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 10px 0 0 10px;
      backdrop-filter: blur(2px);

      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-around;

      height: 100vh;
      width: 70vw;
      z-index: 100;
      position: fixed;
      top: 0;
      right: 0;
    }
  }

  @media screen and (max-width: 700px) {
    .container {
      visibility: hidden;
    }
  }
  @media screen and (min-width: 700px) {
    .container-small {
      visibility: hidden;
    }
  }
`;

export default Wrapper;
