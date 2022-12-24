import { Card } from "./components/Card";
import { CarrouselProducts } from "./components/CarrouselProducts";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { Featured } from "./components/Featured";
import { Header } from "./components/header";
import { bestSellers } from "./data";
function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <DeliveryInfo />
      <CarrouselProducts title={"Mais vendidos"} list={bestSellers} />
    </div>
  );
}

export default App;
