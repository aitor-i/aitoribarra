import styled from "styled-components";

export const StyledThemeButton = styled.div`
  cursor: pointer;
  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }

  &:hover {
    opacity: 1;
  }
  .theme-button {
    color: ${(props) => props.theme.primaryColor};
  }
`;
