import styled from "styled-components";

export const StyledSectionTop = styled.section`
  width: 100%;
  min-width: 1441px;
  height: 37px;

  background-color: var(--recent-received);

  display: flex;
  justify-content: center;

  * {
    font-family: var(--font-open-sans);
  }

  .Container-header-top {
    display: flex;
    align-items: center;

    .Container-Icon {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
        width: 16px;
        height: 16px;
      }

      a {
        margin: 0px 15px;
      }

      span {
        font-weight: 700;
        cursor: pointer;
      }
    }

    a {
      font-size: 10px;
      font-weight: 400;
      color: var(--gray-1);
    }
  }

  svg {
    cursor: pointer;
    :hover {
      color: var(--color-orange);
    }
  }
  a {
    :hover {
      color: var(--color-orange);
    }
  }
`;

export const StyledSectionMid = styled.section`
  * {
    font-family: var(--font-open-sans);
  }
  width: 100%;
  min-width: 1441px;
  background-color: var(--white-1);
  justify-content: space-around;
  align-items: center;
  height: 90px;
  display: flex;
  .Container-mid {
    display: flex;
    width: 850px;
    align-items: center;
    justify-content: space-between;
    .div-input {
      width: 399px;
      height: 37px;
      display: flex;

      justify-content: center;
      align-items: center;

      border-radius: 100px;
      background-color: #e1dcd5;
      input {
        width: 336px;
        height: 19px;

        font-size: 12px;
        font-weight: 600;

        background-color: #e1dcd5;
        border: none;
        color: var(--gray-1);
        outline: none;
        ::placeholder {
          color: var(--gray-1);
        }

        cursor: text;
      }
      svg {
        width: 21px;
        height: 21px;
        cursor: pointer;
      }
    }
    .div-login {
      width: 172px;
      height: 37px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      svg {
        width: 16px;
        height: 16px;
      }
      div {
        width: 100%;
        text-align: start;
        display: flex;
        align-items: center;
        p {
          margin-left: 22px;
          font-size: 9px;
        }
      }
      span {
        margin: 0 3px;
        font-size: 12px;
        font-weight: 400;
      }
      a {
        margin-left: 2px;
        font-size: 12px;
        font-weight: 600;
        :hover {
          color: var(--gold);
        }
      }
    }
    .favorites-bag {
      width: 200px;
      height: 20px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      font-size: 12px;
      .count-bag {
        div {
          padding: 0;
          margin: 0;
          top: 10px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          span {
            font-family: var(--font-open-sans);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    div {
      display: flex;
      align-items: flex-end;
    }
    a {
      margin-left: 2px;
      font-size: 12px;
      font-weight: 600;
      :hover {
        color: var(--gold);
      }
    }
    svg {
      margin-right: 5px;
      width: 21px;
      height: 20px;
      cursor: pointer;
      :hover {
        color: var(--gold);
      }
    }
  }
`;
export const StyledHeader = styled.header`
  * {
    font-family: var(--font-open-sans);
  }
  width: 100%;
  min-width: 1140px;
  height: 175px;
  background-color: var(--gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    cursor: pointer;
  }
  .Container {
    display: flex;
    justify-content: space-between;
    width: 1140px;
  }
  nav {
    height: 49px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: var(--white-1);

    .menu {
      width: 168px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-size: 14px;
        font-weight: 600;
      }
      svg {
        width: 20px;
        height: 17px;
        color: var(--white-1);
      }
    }
    .nav-bar {
      width: 60%;
      display: flex;
      justify-content: space-between;
      a {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
