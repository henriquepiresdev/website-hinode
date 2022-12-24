import styled from "styled-components";

export const TitleDiv = styled.section`
  margin: 0 auto;
  margin-top: 95px;
  width: 1141px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-view-all {
    width: 1141px;
    height: 90px;
  }
  .title {
    text-align: center;
    width: 1141px;
    height: 46px;
    h3 {
      font-family: var(--font-oswald);
      font-size: 46px;
      font-weight: 300;
    }
  }
  .view-all {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 19px;
    a {
      font-family: var(--font-open-sans);
      font-size: 12px;
      color: var(--gray-1);
      line-height: 22;
    }
    svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  list-style: none;
  width: 100%;
  height: 519px;
  display: flex;
  justify-content: center;
  .mantine-Carousel-controls button {
    background-color: transparent;
    color: gray;
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
  .limit-size {
    width: 1141px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mantine-Carousel-indicators button {
    background-color: var(--gold);
  }
`;

export const DivFeature = styled.div`
  width: 1141px;
  height: 519px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
