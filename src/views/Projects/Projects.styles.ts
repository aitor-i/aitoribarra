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
  display: flex;
  flex-direction: column;
  .project {
    width: 20rem;
    border: 1px solid red;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-photo {
    height: 20rem;
    object-fit: cover;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    cursor: pointer;
    letter-spacing: 0.4rem;
    border-radius: 5px;
    padding: 5px;
    font-size: ${(props) => props.theme.subtitleSize};
  }
  .body {
    margin: 5rem;
  }

  width: 100vw;
  min-height: 100vh;
`;

export default Wrapper;
