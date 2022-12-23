import styled from "styled-components";
interface IButtonProps {
  height?: string;
  width?: string;
  background?: string;
  color?: string;
}

export const StyledButton = styled.button<IButtonProps>`
  width: ${(props) => (props.width ? `${props.width}` : "268px")};
  height: ${(props) => (props.height ? `${props.height}` : "50px")};
  font-weight: bold;
  font-size: 11.71px;
  background-color: #ffffff;
  background-color: ${(props) => props.background && `${props.background}`};
  color: var(--color-orange);
  color: ${(props) => props.color && `${props.color}`};
  border: 2px solid var(--color-orange);
  border: 2px solid ${(props) => props.color && `${props.color}`};
  cursor: pointer;
`;
