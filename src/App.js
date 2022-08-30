import BelowNavbar from "./Components/BelowNavbar";
import Navbar from "./Components/Navbar";
import "./index.css";
import MostSearched from "./Components/MostSearched";
import Footer from "./Components/Footer";
import CartFooter from "./Components/CartFooter";
import Banner from "./Components/Banner";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BelowNavbar />
      <Banner/>
      <MostSearched />
      <Footer />
      {/* <CartFooter /> */}
    </div>
  );
}

export default App;
