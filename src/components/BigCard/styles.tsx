import styled from "styled-components";

export const DivCard = styled.div`
  margin: 100px auto;
  width: 557px;
  height: 781px;
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
    background-color: var(--white-1);
    bottom: 578px;
    left: 12px;
  }
  div {
    padding-left: 2px;
    height: 128px;
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
      display: flex;
      flex-direction: row;
      height: 15px;
      overflow: hidden;
    }
    .actual-price {
      font-family: var(--font-oswald);
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      display: flex;
      align-items: center;
      letter-spacing: -1px;
      text-transform: uppercase;
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
    position: relative;
    z-index: 2;
    bottom: 45px;
    left: 145px;
    height: 68px;
    width: 268px;
    border: 3px solid var(--gold);
    color: var(--gold);
    :hover {
      background-color: var(--gold);
      color: var(--white-1);
    }
  }
`;
