import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 832px;
  margin-bottom: 206px;
  .limit-size {
    margin: 0 auto;
    width: 1141px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #title {
      width: 421px;
      height: 88px;
      h4 {
        font-family: "Aktiv Grotesk Ex";
        font-weight: 400;
        font-size: 32px;
        line-height: 44px;
        display: flex;
        align-items: center;
        letter-spacing: -1px;
        text-transform: uppercase;
        color: var(--white-1);
      }
    }
    #form {
      width: 620px;
      height: 81px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      button {
        width: 130px;
        height: 48px;
        background-color: var(--color-blue-marine);
        border: none;
        font-family: "Open Sans";
        font-weight: 700;
        font-size: 11.7143px;
        line-height: 18px;
        text-align: center;
        color: var(--white-1);
      }
      input {
        padding-bottom: 5px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--white-1);
        outline: none;
        cursor: text;
        color: var(--white-1);
        ::placeholder {
          color: var(--gray-3);
          font-weight: 400;
        }
      }
    }
  }
  #blue-div {
    height: 152px;
    background-color: var(--dark-blue);
    display: flex;
    align-items: center;
  }
  #gray-div {
    padding: 77px;
    height: 422px;
    display: flex;
    align-items: flex-start;
    background-color: var(--background-footer);
    color: var(--gray-1);
    font-size: 12px;
  }
  .basic-footer {
    width: 267px;
    height: 176px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-size: 12px;
      li {
        :hover {
          color: var(--black);
        }
        :nth-child(1) {
          margin-bottom: 35px;
          font-weight: 600;
        }
      }
    }
  }
  #fourth-div {
    width: 254px;
    height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
    button {
      width: 221px;
      height: 48px;
      border: none;
      background-color: var(--color-blue-marine);
      color: var(--white-1);
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      a {
        width: 48px;
        height: 48px;
        svg {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
  #white-div {
    height: 258px;
    width: 100%;
    figure {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
