import styled from "styled-components";

export const DivCard = styled.div`
  height: 781px;
  width: 557px;

  margin: 100px auto;

  display: flex;
  flex-direction: column;

  .Container-figure {
    * {
      margin: 0;
      padding: 0;
    }
    height: 781px;
    width: 557px;

    display: flex;
    flex-direction: row;

    background-color: var(--dark-white-f7);
  }
  .DivPrice {
    width: 222px;
    height: 184px;
    padding: 10px;

    border-radius: 16px;

    position: relative;
    z-index: 1;
    bottom: 578px;
    left: 12px;

    background-color: var(--white-1);
  }
  div {
    height: 128px;
    padding-left: 2px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
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
      font-family: var(--font-oswald);
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -1px;

      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        font-weight: 700;
      }
    }
    #installment {
      font-size: 10px;
      font-weight: 700;
      color: var(--gray-3);
    }
  }
  button {
    width: 268px;
    height: 68px;

    position: relative;
    z-index: 1;
    bottom: 45px;
    left: 145px;

    border: 3px solid var(--gold);

    color: var(--gold);
    :hover {
      background-color: var(--gold);
      color: var(--white-1);
    }
  }
`;
