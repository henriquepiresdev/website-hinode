import { CarrouselProducts } from "./components/CarrouselProducts";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { DoubleCarrousel } from "./components/DoubleCarrousel";
import { Featured } from "./components/Featured";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Highlight } from "./components/Highlight";
import { Interest } from "./components/Interest";
import { bestSellers, perfumes } from "./data";
function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <DeliveryInfo />
      <CarrouselProducts title={"MAIS VENDIDOS"} list={bestSellers} />
      <Interest title={"ISSO PODE SER DO SEU INTERESSE"} />
      <DoubleCarrousel list={perfumes} />
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
      <CarrouselProducts title={"CORPO E BANHO"} list={bestSellers} />
      <CarrouselProducts list={bestSellers} />
      <Highlight
        slice={true}
        image="./images/empire/image-empire.jpg"
        title="Linha Empire"
        paragraph="
        Escolha a sua fragrância masculina favorita e desperte as melhores sensações.
      "
        contentButton="CONHEÇA NOSSOS PRODUTOS"
      />
      <CarrouselProducts title={"FRAGRÂNCIAS"} list={bestSellers} />
      <CarrouselProducts list={bestSellers} />
      <CarrouselProducts
        title={"ACABARAM DE CHEGAR"}
        list={bestSellers}
        back={true}
      />
      <Footer />
    </div>
  );
}

export default App;
