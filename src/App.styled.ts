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
  }
`;

export default Wrapper;
