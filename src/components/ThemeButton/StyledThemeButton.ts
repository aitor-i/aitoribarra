import styled from "styled-components";

export const StyledThemeButton = styled.div`
  width: 10px;
  height: 10px;
  position: fixed;
  top: 30px;
  right: 60px;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }

  &:hover {
    opacity: 1;
  }
`;
