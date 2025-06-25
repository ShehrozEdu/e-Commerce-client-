import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProductsDetails from "./Components/Products/ProductsDetails";
import ProductViewAll from "./Components/Products/ProductViewAll";
import ElectronicsDetails from "./Components/Products/ElectronicsDetails";
import ElectronicsViewAll from "./Components/Products/ElectronicsViewAll";
import Cart from "./Components/cart/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Product Routes */}
        <Route path="/product-overview/:id" element={<ProductsDetails />} />
        <Route path="/products/category/:category" element={<ProductViewAll />} />
        <Route path="/products/deals" element={<ProductViewAll />} />
        <Route path="/products/featured" element={<ProductViewAll />} />
        <Route path="/product-list" element={<ProductViewAll />} /> {/* Legacy route */}
        
        {/* Electronics Routes */}
        <Route path="/electronics-overview/:id" element={<ElectronicsDetails />} />
        <Route path="/electronics" element={<ElectronicsViewAll />} />
        
        {/* Cart Route */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      {/* Global Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
