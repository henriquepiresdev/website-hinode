import { StyledHeader, StyledSectionMid, StyledSectionTop } from "./styles";
import { RiUserHeartLine } from "react-icons/ri";
import logo from "../../images/logo.svg";
import { FiRotateCcw, FiSearch } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Indicator } from "@mantine/core";
import { Hamburguer } from "../Hamburguer";
export const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <StyledHeader>
      <StyledSectionTop>
        <div className="Container">
          <div className="Container-header-top">
            <a> A empresa </a>
          </div>
          <div className="Container-header-top">
            <div className="Container-Icon">
              <RiUserHeartLine />
              <a>
                <span>SEJA UM CONSULTOR</span>
              </a>
            </div>
            <a>Fale Conosco</a>
          </div>
        </div>
      </StyledSectionTop>
      <StyledSectionMid>
        <div className="Container">
          <figure>
            <img src={logo} alt="Logotipo da hinode" />
          </figure>
          <div className="Container-mid">
            <div className="div-input">
              <input placeholder="Busque aqui o produto de seu interesse" />
              <FiSearch />
            </div>
            <div className="div-login">
              <div>
                <p>Olá visitante,</p>
              </div>
              <div>
                <RiUserLine />
                <a>ENTRE</a>
                <span>OU</span>
                <a>CADASTRE-SE</a>
              </div>
            </div>
            <div className="favorites-bag">
              <div>
                <AiOutlineHeart />
                <a>FAVORITOS</a>
              </div>
              <div>
                <Indicator
                  label={count}
                  className="count-bag"
                  position="middle-start"
                  color={"var(--red-bag)"}
                >
                  <BiShoppingBag
                    size={24}
                    style={{ display: "block" }}
                    color={"var(--gold)"}
                  />
                </Indicator>
                <a>SACOLA</a>
              </div>
            </div>
          </div>
        </div>
      </StyledSectionMid>
      <div className="Container">
        <nav>
          <div className="menu">
            <Hamburguer />
            <a>Todas as categorias</a>
          </div>
          <div className="nav-bar">
            <a> MAQUIAGEM </a>
            <a> CORPO & BANHO </a>
            <a> VIDA SAUDÁVEL </a>
            <a> ENERGIA E PERFORMANCE </a>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};
