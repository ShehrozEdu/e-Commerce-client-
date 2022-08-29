import BelowNavbar from "./Components/BelowNavbar";
import Navbar from "./Components/Navbar";
import "./index.css";
import MostSearched from "./Components/MostSearched";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BelowNavbar />
      <MostSearched />
      <Footer />
    </div>
  );
}

export default App;
