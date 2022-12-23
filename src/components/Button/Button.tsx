import { StyledButton } from "./styles";
interface IPropsButton {
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  children?: string;
}
export const ButtonComponent = ({
  width,
  height,
  background,
  color,
  children,
}: IPropsButton) => {
  return (
    <StyledButton
      width={width}
      height={height}
      color={color}
      background={background}
    >
      {children}
    </StyledButton>
  );
};
