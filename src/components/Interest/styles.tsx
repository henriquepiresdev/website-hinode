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
`;

export const Container = styled.div`
  margin-bottom: 20px;
  list-style: none;
  width: 100%;
  height: 540px;
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
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 80%;
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
        text-align: center;
        font-weight: 400;
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
          content: "";
          position: absolute;
          width: 269px;
          height: 540px;
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
