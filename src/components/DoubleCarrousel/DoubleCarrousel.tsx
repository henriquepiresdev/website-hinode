import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { AiOutlineEye } from "react-icons/ai";
import IitemProps, { ICardProps } from "../interfaces/interface";
import { Container, DivFeature, TitleDiv } from "./styles";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ITitleProps from "../interfaces/carroulsel.interface";
import { BigCard } from "../BigCard";

export const DoubleCarrousel = ({ title, list }: ITitleProps) => {
  const newMap = list.map((item: ICardProps, index: number, array) => {
    if (index === 0 || index === 2 || index === 4 || index === 6) {
      if (index + 1 > list.length - 1) {
      } else {
        return (
          <Carousel.Slide key={index}>
            <DivFeature>
              <li>
                <BigCard item={item} />
              </li>
              <li>
                <BigCard item={array[index + 1]} />
              </li>
            </DivFeature>
          </Carousel.Slide>
        );
      }
    }
  });

  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <>
      <TitleDiv>
        {title && (
          <div className="title-view-all">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="view-all">
              <AiOutlineEye />
              <a>ver todos</a>
            </div>
          </div>
        )}
      </TitleDiv>
      <Container>
        <div className="limit-size">
          <Carousel
            loop
            sx={{ maxWidth: 1450 }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            withIndicators
            height={915}
            previousControlIcon={<AiOutlineLeft size={50} />}
            nextControlIcon={<AiOutlineRight size={50} />}
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
          >
            {newMap}
          </Carousel>
        </div>
      </Container>
    </>
  );
};
