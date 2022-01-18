import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.primaryColor};
  width: 100vw;
  height: 100vh;
  .container {
    letter-spacing: 0.3rem;
    text-align: center;
    position: relative;
    top: 40vh;
  }
  .title {
    display: flex;
    font-size: ${(props) => props.theme.titleSize};
    gap: 20px;
    justify-content: center;
    border-bottom: solid ${(props) => props.theme.primaryColor} 2px;
    padding-bottom: 2px;
  }

  .subtitle {
    font-size: ${(props) => props.theme.subtitleSize};
    padding-bottom: 10px;
  }
`;

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

export default Wrapper;
