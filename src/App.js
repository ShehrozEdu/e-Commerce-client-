import { Routes, Route } from "react-router-dom";
import "./index.css";
//Components
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import ProductsDetails from "./Components/Products/ProductsDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productOverview" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
