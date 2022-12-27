import styled from "styled-components";

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
`;

export const Container = styled.div`
  width: 100%;
  height: 540px;

  margin-bottom: 20px;

  display: flex;
  justify-content: center;

  .limit-size {
    width: 1141px;

    display: flex;
    justify-content: space-between;

    div {
      width: 267px;
      height: 540px;

      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        max-height: 540px;
      }

      div {
        width: 80%;

        display: flex;
        flex-direction: column;
        gap: 30px;

        position: relative;
        z-index: 1;
        bottom: 80px;
      }

      h3 {
        * {
          font-family: var(--font-oswald);
        }
        color: var(--white-1);
        font-size: 23.225px;
        font-weight: 400;

        text-align: center;
      }

      a {
        display: none;
        text-decoration-line: underline;
        color: var(--white-1);
        font-size: 15.4839px;
        font-weight: 400;
      }

      .energy {
        bottom: 95px;
        transition: 0.5s;
      }
    }

    .text-translate {
      transition: 0.5s;
    }

    .interest-cards {
      transition: 0.3s;
      :hover {
        #energy-translate {
          transform: translateY(-140%);
          a {
            display: block;
            color: var(--white-1);
          }
        }

        .text-translate {
          transform: translateY(-200%);

          a {
            display: block;
            color: var(--white-1);
          }
        }

        ::before {
          width: 269px;
          height: 540px;

          content: "";

          position: absolute;

          background: linear-gradient(
            181.19deg,
            rgba(0, 0, 0, 0.18) 1.02%,
            rgba(0, 0, 0, 0.57) 28.75%,
            rgba(0, 0, 0, 0.74) 67.96%,
            rgba(0, 0, 0, 0.71) 101.26%
          );

          animation: fadeIn 1s;
        }
      }
    }
  }
`;
