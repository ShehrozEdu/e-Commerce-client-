import React from "react";
import Footer from "./Footer";
import MostSearched from "../MostSearched";
import ProductsSlide from "../ProductsSlide";
import Banner from "./Banner";
import BelowNavbar from "./BelowNavbar";
import AdvSlide from "./AdvSlide";

export default function Homepage() {
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
