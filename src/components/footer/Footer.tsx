import React from "react";
import { ButtonComponent } from "../Button";
import { StyledFooter } from "./styles";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

export const Footer = () => {
  return (
    <StyledFooter>
      <div id="blue-div">
        <div className="limit-size">
          <div id="title">
            <h4>
              RecebA nossas <br /> ofertas e novidades
            </h4>
          </div>
          <form id="form" action="">
            <input placeholder="Digite seu nome" />
            <input placeholder="Digite seu email" />
            <ButtonComponent>CADASTRAR</ButtonComponent>
          </form>
        </div>
      </div>
      <div id="gray-div">
        <div className="limit-size">
          <div className="basic-footer">
            <ul>
              <li>GRUPO HINODE</li>
              <li>
                <a>A Empresa</a>
              </li>
              <li>
                <a>Catálogo Hinode</a>
              </li>
              <li>
                <a>Seja um Consultor</a>
              </li>
              <li>
                <a>Hinode Prime</a>
              </li>
              <li>
                <a>Frete Inteligente</a>
              </li>
            </ul>
          </div>
          <div className="basic-footer">
            <ul>
              <li>MAIS VENDIDOS</li>
              <li>
                <a>Corps Lígnea Body Contour Gel Modelador</a>
              </li>
              <li>
                <a>Shake de Vanilla H+ HND</a>
              </li>
              <li>
                <a>Shake de Morango H+ HND</a>
              </li>
              <li>
                <a>Luva de Silicone Creme para as Mãos Hands</a>
              </li>
              <li>
                <a>Empire Gold</a>
              </li>
              <li>
                <a>Empire VIP</a>
              </li>
            </ul>
          </div>
          <div className="basic-footer">
            <ul>
              <li>DÚVIDAS FREQUENTES</li>
              <li>
                <a>Fale Conosco</a>
              </li>
              <li>
                <a>Entrega, Trocas e Devoluções</a>
              </li>
              <li>
                <a>Compra e Venda</a>
              </li>
              <li>
                <a>Política de Privacidade</a>
              </li>
              <li>
                <a>Remover Consentimento</a>
              </li>
            </ul>
          </div>
          <div id="fourth-div">
            <ButtonComponent>CENTRAL DE ATENDIMENTO</ButtonComponent>
            <ul>
              <li>De segunda a sexta das 9h às 21h</li>
              <li>Capitais e regiões metropolitanas 4020-2424</li>
              <li>Demais localidades: 0800-144-6633</li>
            </ul>
            <div>
              <a>
                <GrInstagram />
              </a>
              <a>
                <AiOutlineYoutube />
              </a>
              <a>
                <GrFacebookOption />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="white-div">
        <figure>
          <img src="/images/footer.jpg" alt="" />
        </figure>
      </div>
    </StyledFooter>
  );
};
