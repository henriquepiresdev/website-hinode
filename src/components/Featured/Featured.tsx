import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import feature from "../../../src/assets/img/feature.png";
import { Container, DivFeature } from "./styles";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ButtonComponent } from "../Button";
export const Featured = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Container>
      <Carousel
        sx={{ maxWidth: 1450 }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
        withIndicators
        height={768}
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
          <DivFeature>
            <img src={feature} alt="" />
            <div>
              <h2>Base Líquida DAZZLE</h2>
              <ButtonComponent
                background="transparent"
                color="white"
                width="171px"
              >
                COMPRAR
              </ButtonComponent>
            </div>
          </DivFeature>
        </Carousel.Slide>
        <Carousel.Slide>
          <DivFeature>
            <img src={feature} alt="" />
            <div>
              <h2>Base Líquida DAZZLE</h2>
              <ButtonComponent
                background="transparent"
                color="white"
                width="171px"
              >
                COMPRAR
              </ButtonComponent>
            </div>
          </DivFeature>
        </Carousel.Slide>
        <Carousel.Slide>
          <DivFeature>
            <img src={feature} alt="" />
            <div>
              <h2>Base Líquida DAZZLE</h2>
              <ButtonComponent
                background="transparent"
                color="white"
                width="171px"
              >
                COMPRAR
              </ButtonComponent>
            </div>
          </DivFeature>
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};
