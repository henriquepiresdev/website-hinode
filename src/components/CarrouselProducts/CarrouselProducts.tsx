import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { AiOutlineEye } from "react-icons/ai";
import { Container, DivFeature, TitleDiv } from "./styles";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Card } from "../Card";

export const CarrouselProducts = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <>
      <TitleDiv>
        <div className="title-view-all">
          <div className="title">
            <h3>MAIS VENDIDOS</h3>
          </div>
          <div className="view-all">
            <AiOutlineEye />
            <a>ver todos</a>
          </div>
        </div>
      </TitleDiv>
      <Container>
        <div className="limit-size">
          <Carousel
            sx={{ maxWidth: 1450 }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            loop
            withIndicators
            height={519}
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
            <Carousel.Slide>
              <DivFeature></DivFeature>
            </Carousel.Slide>
            <Carousel.Slide>
              <DivFeature></DivFeature>
            </Carousel.Slide>
          </Carousel>
        </div>
      </Container>
    </>
  );
};
