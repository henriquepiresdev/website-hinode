import { Card } from "./components/Card";
import { CarrouselProducts } from "./components/CarrouselProducts";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { Featured } from "./components/Featured";
import { Header } from "./components/header";
import { bestSellers } from "./data";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Featured />
      <DeliveryInfo />
      <CarrouselProducts /> */}
      <Card item={bestSellers[5]}></Card>
    </div>
  );
}

export default App;
