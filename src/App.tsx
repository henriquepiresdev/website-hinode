import { Card } from "./components/Card";
import { CarrouselProducts } from "./components/CarrouselProducts";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { Featured } from "./components/Featured";
import { Header } from "./components/header";
import { Interest } from "./components/Interest";
import { bestSellers } from "./data";
function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <DeliveryInfo />
      <CarrouselProducts title={"MAIS VENDIDOS"} list={bestSellers} />
      <Interest title={"ISSO PODE SER DO SEU INTERESSE"} />
    </div>
  );
}

export default App;
