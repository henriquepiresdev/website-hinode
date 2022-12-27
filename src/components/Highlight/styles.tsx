import styled from "styled-components";
interface IIsSlice {
  slice?: boolean;
}
export const SectionHighlight = styled.section`
  width: 100%;
  height: 813px;
  max-width: 1700px;

  margin: 150px auto;

  background-color: var(--dark-white-f7);

  article {
    width: 491px;
    height: 384px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      width: 412px;

      h2 {
        font-family: "Playfair Display";
        font-style: normal;
        font-weight: 700;
        font-size: 92.1471px;
        line-height: 92px;
        letter-spacing: -3.54412px;
      }
    }

    div {
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 137.69%;

        figure {
          img {
            width: 100%;
            height: 813px;
          }
        }
      }
    }
  }
  ${(props: IIsSlice) => {
    return props.slice
      ? `  
    div {
    display: flex;
    align-items: center;
    
    figure{
        width: 776.36px;
        height: 813px;
      img{
        width: 776.36px;
        height: 813px;
      }
    }
    article{
      width: 450px;
      margin-left: 65px;
    }
    button{
      color: var(--white-1);
      background-color: var(--color-black);
      border: 2px solid var(--black);
    
      :hover{
        background-color: var(--gold);
        border: 2px solid var(--gold)
      }
    }
  }`
      : `
    figure {
    img {
      width: 100%;
    }
  }
  article {
    position: relative;
    z-index: 1;
    bottom: 628px;
    left: 147px;
    div{
      p{
        color: var(--white-1);
      }
    }
  }
  .title{
    color: var(--white-1);
  }
  button {
      background-color: transparent;
      border: 2px solid var(--white-1);
      color: var(--white-1);
      :hover {
        background-color: var(--white-1);
        color: var(--gray-3);
        border: 2px solid var(--gray-3);
      }
    }
  
    `;
  }}
`;
