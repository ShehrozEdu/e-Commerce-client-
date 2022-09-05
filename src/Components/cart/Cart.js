import React from "react";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems ? (
        <div className="container cart-section mt-3">
          <div className="row">
            <div className="col-lg-8 col-sm-12 ">
              <div className="cart-header  d-flex  fw-bold ">
                <div className="col-6 text-center  cart-border ">
                  <p className="py-3 ">Flipkart ({cartItems.length})</p>
                </div>
              </div>
              <div className="cart-header mt-2 d-flex justify-content-between align-items-center bg-white">
                <p className="m-2 fw-normal">From Saved Addresses</p>
                <button className="border border-primary p-2 fs-6 m-2 bg-white text-primary fw-normal">
                  Enter Delivery Pincode
                </button>
              </div>
            </div>
            {/* left-cart */}
            <div className="col-lg-8 col-sm-12 mb-5  mt-2">
              {cartItems.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
            <div className="col-lg-7 position-fixed bottom-0 bg-light py-3 col-sm-12 d-flex justify-content-end align-items-center order-btn">
              <button
                type="button"
                className=" btn place-order text-white fw-bold"
              >
                PLACE ORDER
              </button>
            </div>
            {/* right  */}
            <div className="col-lg-3 col-sm-12  price-detail position-fixed  mt-sm-1 mt-xs-4 ">
              <TotalView cartItems={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <div>EMpty</div>
      )}
    </>
  );
}
