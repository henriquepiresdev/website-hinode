import { ButtonComponent } from "../Button/";
import { DivCard } from "./styles";
import { IitemProps } from "../interfaces/interface";
import { AiOutlineHeart } from "react-icons/ai";
import { Rating } from "@mantine/core";

export const Card = ({ item }: IitemProps) => {
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
        <div className="heart">
          <AiOutlineHeart />
        </div>
      </div>
      <div>
        <h4>{item.title}</h4>
        <Rating value={item?.avg} readOnly color={"cyan"} className="stars" />
        {item.promoPrice ? (
          <p className="promo">{formatBrl(item.promoPrice)}</p>
        ) : (
          <p></p>
        )}
        <p className="actual-price">{formatBrl(item.price)}</p>
      </div>
      <ButtonComponent> COMPRAR </ButtonComponent>
    </DivCard>
  );
};
