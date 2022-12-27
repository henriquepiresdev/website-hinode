import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 768px;

  display: flex;
  justify-content: center;

  background-color: var(--back-feat);

  .mantine-Carousel-controls button {
    background-color: transparent;
    color: var(--white-1);
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
  .mantine-Carousel-indicators button {
    width: 10.5px;
    height: 10.5px;

    background-color: transparent;

    border: 2px solid var(--white-1);
    border-radius: 100%;

    transition: 1.5s;
    &[data-active] {
      width: 22.5px;
      height: 12px;

      background-color: var(--white-1);

      border: 1px solid var(--gold);
      border-radius: 10px;
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

    position: absolute;
    right: -50px;
    top: 150px;

    h2 {
      font-family: var(--font-playfair);
      font-size: 92px;
      font-weight: bold;
      color: var(--white-1);
    }

    button {
      margin-top: 5px;
      border: 3px solid var(--white-1);
      :hover {
        border: 3px solid var(--back-feat);
        background-color: var(--white-1);
        color: var(--back-feat);
      }
    }
  }
`;
