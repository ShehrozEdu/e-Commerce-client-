import React from "react";
import ProductsSlide from "./ProductsSlide";

export default function AdvSlide({ products }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-9 col-sm-12">
          <ProductsSlide
            time={true}
            title="Deal of the day"
            products={products}
          />
        </div>
        <div className="col-lg-2 col-md-2 mt-4 p-2 shadow adv-img-box d-lg-flex d-md-flex d-sm-none d-xs-none   bg-white">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/e5d43b308280f531.jpg?q=70"
            className="adv-img-width col-md-12 col-sm-12 "
            alt="adv"
          />
        </div>
      </div>
    </>
  );
}
