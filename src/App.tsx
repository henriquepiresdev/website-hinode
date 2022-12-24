import { BigCard } from "./components/BigCard";
import { Card } from "./components/Card";
import { CarrouselProducts } from "./components/CarrouselProducts";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { DoubleCarrousel } from "./components/DoubleCarrousel";
import { Featured } from "./components/Featured";
import { Header } from "./components/header";
import { Interest } from "./components/Interest";
import { bestSellers, perfumes } from "./data";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Featured />
      <DeliveryInfo />
      <CarrouselProducts title={"MAIS VENDIDOS"} list={bestSellers} />
      <Interest title={"ISSO PODE SER DO SEU INTERESSE"} />
      <DoubleCarrousel list={perfumes} /> */}
    </div>
  );
}

export default App;
