import { ButtonComponent } from "../Button/";
import { DivCard } from "./styles";
import { Rating } from "@mantine/core";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import IitemProps from "../interfaces/interface";

export const BigCard = ({ item }: IitemProps): ReactJSXElement => {
  const formatBrl = (price: number) => {
    const currency = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const brl = currency.format(price).split(",");
    return (
      <>
        {brl[0]},<span>{brl[1]}</span>
      </>
    );
  };
  return (
    <DivCard>
      <div className="Container-figure">
        <div>
          <img src={item.img} alt="imagem do produto" />
        </div>
      </div>
      <div className="DivPrice">
        <h3>{item.title}</h3>
        <h3>{item.quantity}</h3>
        <Rating value={item?.avg} readOnly color={"cyan"} className="stars" />
        <p className="actual-price">{formatBrl(item.price)}</p>
        <p id="installment">em até 2x de {formatBrl(item.installment!)}</p>
      </div>
      <ButtonComponent> COMPRAR </ButtonComponent>
    </DivCard>
  );
};
