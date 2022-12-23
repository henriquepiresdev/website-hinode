import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 768px;
  display: flex;
  justify-content: center;
  background-color: var(--back-feat);
  .mantine-Carousel-controls button {
    background-color: transparent;
    color: white;
    border: none;
    box-shadow: none;
    cursor: pointer;
    path {
      cursor: pointer;
    }
    svg {
      cursor: pointer;
    }
  }
`;

export const DivFeature = styled.div`
  display: flex;
  img {
    width: 1400px;
    height: 770px;
    border: 3px solid var(--back-feat);
  }
  .dazzle {
    position: absolute;
    z-index: 1;
    top: 160px;
    left: 100px;
  }
  .model {
    margin-left: 300px;
  }
  div {
    width: 600px;
    height: 300px;
    right: -50px;
    top: 150px;
    position: absolute;
    h2 {
      font-family: var(--font-playfair);
      font-size: 92px;
      font-weight: bold;
      color: var(--white-1);
    }
    button {
      margin-top: 5px;
      border: 3px solid var(--white-1);
    }
  }
`;
