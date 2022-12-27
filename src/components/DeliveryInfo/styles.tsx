import styled from "styled-components";

export const DeliveryContainer = styled.section`
  font-family: var(--font-open-sans);

  margin-top: 20px;
  height: 117px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--gray-100);

  div {
    width: 1140px;

    display: flex;
    justify-content: space-between;

    div {
      height: 46px;
    }

    .size-icons {
      color: var(--gray-1);
      width: 50px;
      height: 27px;
    }

    p {
      font-family: var(--font-open-sans);
      color: var(--gray-1);
      font-size: 14px;
      font-weight: 600;
    }
  }

  .CredCard {
    width: 129px;

    display: flex;
    align-items: center;
    gap: 12px;
  }

  .Delivery {
    width: 270px;

    display: flex;
    align-items: center;
    gap: 12px;
  }

  .Promo {
    width: 224px;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  .PromoDelivery {
    width: 201px;

    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
