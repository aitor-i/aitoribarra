import styled from "styled-components";

const StyledParagraph = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    top: 50vh;
    position: absolute;
    width: 100vw;
    text-align: justify;

    color: ${(props) => props.theme.primaryColor};
  }
  p {
    padding: 0 20vw;
  }
`;

export default StyledParagraph;
