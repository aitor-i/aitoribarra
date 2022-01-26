import styled from "styled-components";

const StyledFooter = styled.div`
  a {
    cursor: pointer;
    padding: 0.5rem;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .link {
    &:active {
      transform: scale(0.95);
      transition: transform 0.1s ease-in;
    }

    &:hover {
      opacity: 1;
      color: blue;
    }
  }
  .react-icons {
    color: ${(props) => props.theme.primaryColor};
    &:hover {
      color: ${(props) => props.theme.secondaryColor};
      opacity: 1;
    }
  }
`;

export default StyledFooter;
