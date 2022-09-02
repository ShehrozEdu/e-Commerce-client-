import React, { useEffect } from "react";
import Footer from "./Footer";
import MostSearched from "../MostSearched";
import ProductsSlide from "../ProductsSlide";
import Banner from "./Banner";
import BelowNavbar from "./BelowNavbar";
import AdvSlide from "./AdvSlide";

import { getProducts } from "../../Redux/Actions/ProductAction";
import { useDispatch } from "react-redux";

export default function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <BelowNavbar />
      <Banner />
      <ProductsSlide time={false} title="Best in Electronics" />
      <AdvSlide time={true} title="Deal of the day" />
      <ProductsSlide time={false} title="Best in Fashion" />
      <MostSearched />
      <Footer />
    </>
  );
}
