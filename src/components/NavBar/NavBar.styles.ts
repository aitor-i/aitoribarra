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
    &_button {
      position: fixed;
      top: 24px;
      right: 24px;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      visibility: hidden;
    }
  }
  @media screen and (min-width: 600px) {
    .container-small {
      visibility: hidden;
    }
  }
`;

export default Wrapper;
