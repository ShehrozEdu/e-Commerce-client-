import React, { useEffect } from "react";
import Footer from "./Footer";
import MostSearched from "./MostSearched";
import ProductsSlide from "./ProductsSlide";
import Banner from "./Banner";
import BelowNavbar from "./BelowNavbar";
import AdvSlide from "./AdvSlide";

import { getProducts } from "../../Redux/Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

export default function Homepage() {
  const { products } = useSelector((state) => state.getProduct);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <BelowNavbar />
      <Banner />
      <AdvSlide time={true} title="Deal of the day" products={products} />
      <ProductsSlide
        time={false}
        title="Best in Electronics"
        products={products}
      />
      <ProductsSlide time={false} title="Best in Fashion" products={products} />
      <MostSearched />
      <Footer />
    </>
  );
}
