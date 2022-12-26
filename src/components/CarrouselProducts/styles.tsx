import styled from "styled-components";
interface ICarroouselProps {
  back?: boolean;
}
export const BackgroundDiv = styled.div`
  background-color: ${(props: ICarroouselProps) =>
    props.back ? "var(--recent-received)" : "var(--white-1)"};
  .Container-figure {
    background-color: ${(props: ICarroouselProps) =>
      props.back ? "var(--white-1)" : "var(--recent-received)"};
  }
`;
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

export const Container = styled.section`
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
    background-color: transparent;
    width: 10.5px;
    height: 10.5px;
    border: 2px solid var(--gold);
    transition: 1.5s;

    border-radius: 100%;
    &[data-active] {
      width: 22.5px;
      height: 12px;
      border: 1px solid var(--gold);
      border-radius: 10px;
      background-color: var(--gold);
    }
  }
`;

export const DivFeature = styled.div`
  width: 1141px;
  height: 540px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .heart {
    svg {
      cursor: pointer;
    }
  }
`;
