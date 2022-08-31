import React from "react";
import ProductsSlide from "../ProductsSlide";

export default function AdvSlide({ time, title }) {
  return (
    <>
      <div className="col-12 d-flex">
        <div className="col-10">
          <ProductsSlide time={true} title="Deal of the day" />
        </div>
        <div className="col-2 mt-4 p-2 shadow bg-white">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/e5d43b308280f531.jpg?q=70"
            className="adv-width "
            alt="adv"
          />
        </div>
      </div>
    </>
  );
}
