import styled from "styled-components";
interface ICarroouselProps {
  back?: boolean;
}
export const BackgroundDiv = styled.div`
  background-color: ${(props: ICarroouselProps) =>
    props.back ? "var(--recent-received)" : "var(--white-1)"};
  .Container-figure {
    background-color: ${(props: ICarroouselProps) =>
      props.back ? "#ffffff" : "var(--recent-received)"};
  }
`;
export const TitleDiv = styled.section`
  width: 1141px;

  margin: 0 auto;
  margin-top: 95px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title-view-all {
    width: 1141px;
    height: 90px;
  }
  .title {
    width: 1141px;
    height: 46px;

    text-align: center;

    h3 {
      font-family: var(--font-oswald);
      font-size: 46px;
      font-weight: 300;
    }
  }
  .view-all {
    width: 100%;
    height: 19px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;

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
    width: 10.5px;
    height: 10.5px;

    background-color: transparent;

    border: 2px solid var(--gold);
    border-radius: 100%;

    transition: 1.5s;

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
