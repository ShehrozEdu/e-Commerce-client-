import BelowNavbar from "./Components/BelowNavbar";
import Navbar from "./Components/Navbar";
import "./index.css";
import MostSearched from "./Components/MostSearched";
import Footer from "./Components/Footer";
import CartFooter from "./Components/CartFooter";
import Banner from "./Components/Banner";
import ProductsSlide from "./Components/ProductsSlide";
import AdvSlide from "./Components/AdvSlide";
import ProductsDetails from "./Components/Products/ProductsDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BelowNavbar />
      <Banner />
      <ProductsSlide time={false} />
      <AdvSlide time={true} />
      <ProductsSlide time={false} />
      <MostSearched />
      <Footer />
      {/* <CartFooter />  */}
      {/* <ProductsDetails /> */}
    </div>
  );
}

export default App;
