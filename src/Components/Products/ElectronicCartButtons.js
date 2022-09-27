import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/ElectronicsCartAction.js";
export default function CartButtons({ electronics }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { _id } = electronics;

  const addItemToCart = () => {
    dispatch(addToCart(_id, quantity));
    navigate("/cart");
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn  py-3 px-2 font-product-btn cart-btn"
          onClick={() => addItemToCart()}
        >
          <i class="fa-solid fa-cart-shopping me-2"></i>ADD TO CART
        </button>
        <button className="btn text-light ms-5 px-3 font-product-btn bolt-btn">
          <i class="fa-solid fa-bolt me-2"></i>BUY NOW
        </button>
      </div>
    </>
  );
}
