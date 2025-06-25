import React, { useEffect } from "react";
import Footer from "./Footer";
import MostSearched from "./MostSearched";
import ProductsSlide from "./ProductsSlide";
import Banner from "./Banner";
import BelowNavbar from "./BelowNavbar";
import AdvSlide from "./AdvSlide";
import ElectronicsSlide from "../Products/ElectronicsSlide";

// Redux imports
import { getDealProducts, getFashionProducts } from "../../Redux/Actions/ProductAction";
import { getElectronics } from "../../Redux/Actions/ElectronicsAction";
import { useDispatch, useSelector } from "react-redux";
import AdvGrid from "./AdvGrid";

export default function Homepage() {
  const { products: dealProducts } = useSelector((state) => state.getDealProducts);
  const { products: fashionProducts } = useSelector((state) => state.getFashionProducts);
  const { electronics } = useSelector((state) => state.getElectronics);
  
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch deals (featured products across categories)
    dispatch(getDealProducts(8)); // Limit to 8 items for "Deal of the day"
    
    // Fetch fashion products specifically for homepage
    dispatch(getFashionProducts(8)); // Limit to 8 items for "Best in Fashion"
    
    // Fetch electronics
    dispatch(getElectronics());
  }, [dispatch]);

  return (
    <>
      <BelowNavbar />
      <Banner />
      
      {/* Deal of the day - Now shows actual deal products */}
      <AdvSlide 
        time={true} 
        title="Deal of the day" 
        products={dealProducts || []} 
      />
      
      {/* Best in Electronics */}
      <ElectronicsSlide electronics={electronics || []} />
      
      <AdvGrid />
      
      {/* Best in Fashion - Now shows fashion category products from dedicated slice */}
      <ProductsSlide 
        time={false} 
        title="Best in Fashion" 
        products={fashionProducts || []} 
      />
      
      <AdvGrid />
      <MostSearched />
      <Footer />
    </>
  );
}
