import styled from "styled-components";

export const DivCard = styled.div`
  width: 266px;
  height: 499px;

  display: flex;
  flex-direction: column;

  .Container-figure {
    height: 311px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: var(--dark-white-f7);

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 90%;
      }
    }

    .heart {
      height: 90%;

      align-items: flex-start;
      justify-content: flex-start;

      svg {
        width: 21px;
        height: 21px;

        position: relative;
        right: 10px;
        z-index: 1;
      }
    }
  }

  div {
    height: 128px;
    padding-left: 2px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      margin-top: 2px;

      font-family: var(--font-oswald);
      font-size: 17px;
      font-weight: 400;
    }

    .promo {
      font-family: var(--font-oswald);
      font-size: 14px;
      font-weight: 400;
      text-decoration-line: line-through;
      color: var(--gray-3);
    }

    .stars {
      height: 15px;

      display: flex;
      flex-direction: row;

      overflow: hidden;
    }

    .actual-price {
      font-family: "Aktiv Grotesk Ex";
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      display: flex;
      align-items: center;
      letter-spacing: -1px;

      span {
        position: relative;
        bottom: 5px;

        font-size: 14px;
        font-weight: 700;
      }
    }
  }
`;
