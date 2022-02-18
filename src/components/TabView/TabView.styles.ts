import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  color: ${(props) => props.theme.primaryColor};

  .container {
    position: fixed;
    top: 25vh;
    width: 80vw;

    background: rgba(255, 255, 255, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    backdrop-filter: blur(2px);
  }
  .active {
    border-radius: 0px;
    border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
  }

  .inactive {
    border-radius: 0px;
    border-bottom: 2px solid gray;
  }
  h2 {
    font-size: 2rem;
    cursor: pointer;
    letter-spacing: 0.4rem;
    border-radius: 5px;
    padding: 5px;
    font-size: ${(props) => props.theme.subtitleSize};
  }
  .tags {
    position: relative;
    z-index: -100;
    top: 5px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
  .text {
    text-align: justify;
    letter-spacing: 0.3rem;
    font-size: 1.3rem;
    padding: 20px;
    padding-top: 40px;
  }
  @media screen and (max-width: 700px) {
    .tags {
      flex-direction: column;
    }
    .text {
      font-size: 1rem;
    }
    .container {
      top: 20vh;
    }
  }
`;

export default Wrapper;
