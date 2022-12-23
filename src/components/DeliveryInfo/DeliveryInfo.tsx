import React from "react";
import { RiBankCard2Line } from "react-icons/ri";
import { RiTruckLine } from "react-icons/ri";
import { FaDropbox } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { DeliveryContainer } from "./styles";

export const DeliveryInfo = () => {
  return (
    <DeliveryContainer>
      <div className="Container">
        <div className="CredCard">
          <RiBankCard2Line className="size-icons" />
          <p>Tudo em até 6x sem juros</p>
        </div>

        <div className="Delivery">
          <RiTruckLine className="size-icons" />
          <p>FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil</p>
        </div>

        <div className="Promo">
          <RiExchangeLine className="size-icons" />
          <p>Hinode Prime: Receba em casa todo mês com 20% OFF</p>
        </div>

        <div className="PromoDelivery">
          <FaDropbox className="size-icons" />
          <p>Garanta mais economia com frete inteligente</p>
        </div>
      </div>
    </DeliveryContainer>
  );
};
