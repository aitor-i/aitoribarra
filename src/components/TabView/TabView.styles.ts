import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    position: fixed;
    top: 500px;
    color: #f2f2f2;
    width: 100vw;
  }
  .active {
    color: blue;
  }

  .inactive {
    border: 2px solid gray;
  }
  h2 {
    font-size: 2rem;
    cursor: pointer;
    background-color: #f2f2f2;
    color: #020202;
    border-radius: 5px;
    padding: 5px;
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
    width: 100%;
    height: 300px;
    background-color: #f2f2f2;
    color: #020202;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 25px;
  }
`;

export default Wrapper;
