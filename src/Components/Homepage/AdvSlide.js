import React from "react";
import ProductsSlide from "../ProductsSlide";

export default function AdvSlide({ products }) {
  return (
    <>
      <div className="col-12 d-flex">
        <div className="col-lg-10 col-md-10 col-9">
          <ProductsSlide
            time={true}
            title="Deal of the day"
            products={products}
          />
        </div>
        <div className="col-2 mt-4 p-2 shadow adv-img-box  bg-white">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/e5d43b308280f531.jpg?q=70"
            className="adv-img-width "
            alt="adv"
          />
        </div>
      </div>
    </>
  );
}
