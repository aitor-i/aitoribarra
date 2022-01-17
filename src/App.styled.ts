import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #282c34;
  color: #f2f2f2;
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
    font-size: 3rem;
    gap: 20px;
    justify-content: center;
  }

  .subtitle {
    border-bottom: solid #f2f2f2 2px;
    padding-bottom: 2px;
    font-size: 1.5rem;
  }
`;

export default Wrapper;
