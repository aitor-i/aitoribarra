import styled from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(
    55deg,
    hsl(63deg 45% 56%) 0%,
    hsl(78deg 40% 56%) 7%,
    hsl(96deg 34% 56%) 14%,
    hsl(120deg 28% 55%) 22%,
    hsl(143deg 31% 49%) 29%,
    hsl(157deg 41% 43%) 37%,
    hsl(168deg 52% 37%) 45%,
    hsl(175deg 63% 32%) 52%,
    hsl(180deg 68% 29%) 59%,
    hsl(183deg 68% 28%) 66%,
    hsl(186deg 63% 28%) 73%,
    hsl(190deg 56% 29%) 80%,
    hsl(193deg 49% 29%) 86%,
    hsl(196deg 43% 28%) 91%,
    hsl(200deg 36% 28%) 96%,
    hsl(203deg 30% 26%) 100%
  );
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .body {
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    backdrop-filter: blur(2px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20rem;
    width: 45%;
    letter-spacing: 0.3rem;
    text-align: center;
    position: relative;
    top: 40vh;
  }
  .title {
    display: flex;
    color: ${(props) => props.theme.secondaryColor};
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

  @media screen and (max-width: 700px) {
    .body {
      width: 95%;
    }
  }
`;

export default Wrapper;
