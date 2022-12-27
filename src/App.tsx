import {
  bestSellers,
  perfumes,
  mostDesejable,
  life,
  bodyBath,
  bodyBath2,
  fragrances,
  fragrances2,
  recentReceived,
} from "./data";
import { CarrouselProducts } from "./components/CarrouselProducts";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { DoubleCarrousel } from "./components/DoubleCarrousel";
import { Featured } from "./components/Featured";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Highlight } from "./components/Highlight";
import { Interest } from "./components/Interest";
function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <DeliveryInfo />
      <CarrouselProducts title={"MAIS VENDIDOS"} list={bestSellers} />
      <Interest title={"ISSO PODE SER DO SEU INTERESSE"} />
      <DoubleCarrousel list={perfumes} />
      <CarrouselProducts title={"OS MAIS DESEJADOS"} list={mostDesejable} />
      <CarrouselProducts title={"VIDA SAUDÁVEL"} list={life} />
      <Highlight
        slice={false}
        image="./images/bath-images/woman-bath.jpg"
        title="
        Corpo e  Banho
      "
        paragraph="
        Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo.
      "
        contentButton="CONHEÇA NOSSOS PRODUTOS"
      />
      <CarrouselProducts title={"CORPO E BANHO"} list={bodyBath} />
      <CarrouselProducts list={bodyBath2} />
      <Highlight
        slice={true}
        image="./images/empire/image-empire.jpg"
        title="Linha Empire"
        paragraph="
        Escolha a sua fragrância masculina favorita e desperte as melhores sensações.
      "
        contentButton="CONHEÇA NOSSOS PRODUTOS"
      />
      <CarrouselProducts title={"FRAGRÂNCIAS"} list={fragrances} />
      <CarrouselProducts list={fragrances2} />
      <CarrouselProducts
        title={"ACABARAM DE CHEGAR"}
        list={recentReceived}
        back={true}
      />
      <Footer />
    </div>
  );
}

export default App;
