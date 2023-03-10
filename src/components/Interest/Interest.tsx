import ITitleInterestProps from "../interfaces/interest.interface";
import { AiOutlineEye } from "react-icons/ai";
import { Container, TitleDiv } from "./styles";

export const Interest = ({ title }: ITitleInterestProps) => {
  return (
    <>
      <TitleDiv>
        {title && (
          <div className="title-view-all">
            <div className="title">
              <h3>{title}</h3>
            </div>
          </div>
        )}
      </TitleDiv>
      <Container>
        <div className="limit-size">
          <div className="interest-cards">
            <figure>
              <img
                src="/images/interest/image-interest-1.jpg"
                alt="imagem de ilustração para o caminho de maquiagens"
              />
            </figure>
            <div className="text-translate">
              <h3>MAQUIAGEM</h3>
              <a>VER MAIS</a>
            </div>
          </div>
          <div className="interest-cards">
            <figure>
              <img
                src="/images/interest/image-interest-2.jpg"
                alt="imagem de ilustração mulher com perfume"
              />
            </figure>
            <div className="text-translate">
              <h3>FRAGRÂNCIAS</h3>
              <a>VER MAIS</a>
            </div>
          </div>
          <div className="interest-cards">
            <figure>
              <img
                src="/images/interest/image-interest-3.jpg"
                alt="imagem de ilustração homem tomando shake de proteína"
              />
            </figure>
            <div id="energy-translate" className="energy">
              <h3>ENERGIA & PERFORMANCE</h3>
              <a>VER MAIS</a>
            </div>
          </div>
          <div className="interest-cards">
            <figure>
              <img
                src="/images/interest/image-interest-4.jpg"
                alt="imagem de ilustração passando creme na mão"
              />
            </figure>
            <div className="text-translate">
              <h3>CORPO & BANHO</h3>
              <a>VER MAIS</a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
