import { Routes, Route } from "react-router-dom";
import "./index.css";
import ContextApi from "./Components/Context/ContextApi";
//Components
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import ProductsDetails from "./Components/Products/ProductsDetails";
import Cart from "./Components/cart/Cart";
function App() {
  return (
    <ContextApi className="App">
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productOverview/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ContextApi>
  );
}

export default App;
