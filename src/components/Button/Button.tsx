import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { IPropsButton } from "../interfaces/button.interface";
import { StyledButton } from "./styles";

export const ButtonComponent = ({
  width,
  height,
  background,
  color,
  children,
}: IPropsButton): ReactJSXElement => {
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
