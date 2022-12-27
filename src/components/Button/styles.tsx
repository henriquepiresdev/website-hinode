import styled from "styled-components";
import { IButtonProps } from "../interfaces/button.interface";

export const StyledButton = styled.button<IButtonProps>`
  width: ${(props) => (props.width ? `${props.width}` : "268px")};
  height: ${(props) => (props.height ? `${props.height}` : "50px")};

  font-weight: bold;
  font-size: 11.71px;

  background-color: ${(props) =>
    props.background ? `${props.background}` : `var(--white-1)`};

  color: ${(props) => (props.color ? `${props.color}` : `var(--color-orange)`)};

  border: 2px solid
    ${(props) => (props.color ? `${props.color}` : `var(--color-orange)`)};

  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: ${(props) =>
      props.background ? `${props.background}` : `var(--white-1)`};

    background-color: ${(props) =>
      props.color ? `${props.color}` : `var(--color-orange)`};

    border: ${(props) =>
      props.color ? `${props.color}` : `var(--color-orange)`};
  }
`;
