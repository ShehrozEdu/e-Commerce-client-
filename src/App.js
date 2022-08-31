import { Routes, Route } from "react-router-dom";
import "./index.css";
//Components
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import ProductsDetails from "./Components/Products/ProductsDetails";
import Cart from "./Components/cart/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productOverview" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
