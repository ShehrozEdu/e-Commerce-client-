import React from "react";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";

export default function TotalView({ cartItems, itemsValue, setItemsValue }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      {
        price += item.price.mrp;
        discount += item.price.mrp - item.price.cost;
      }
    });
    setPrice(price);
    setDiscount(discount);
  };
  return (
    <>
      <div className=" col-lg-12 py-2 price-head text-muted">
        <p className="fw-lighter   mx-1 fs-6">PRICE DETAILS</p>
      </div>

      <div className="price-section row">
        <div className="col-8 fw-bolder py-2">
          <p>Price ({cartItems.length} item )</p>
        </div>
        <div className="col-4  py-2">
          <p>₹ {price * Array(cartItems.map((item) => item.quantity))}</p>
        </div>

        <div className="col-8 fw-bolder py-2">
          <p>Discount</p>
        </div>
        <div className="col-4 py-2">
          <p className="text-success">
            -₹
            {discount * Array(cartItems.map((item) => item.quantity))}
          </p>
        </div>

        <div className="col-8 fw-bolder py-2">
          <p>Delivery Charges</p>
        </div>
        <div className="col-4 py-2">
          <p className="text-success">FREE</p>
        </div>

        <div className="col-8 fw-bolder py-2">
          <p>Secured Packaging Fee</p>
        </div>
        <div className="col-4  py-2">
          <p>+₹29</p>
        </div>
      </div>

      <div className="row pt-3 total-amount">
        <div className="col-8 fw-bold fs-5">
          <p>Total Amount</p>
        </div>
        <div className="col-4 fw-bold fs-5">
          <p>
            ₹
            {(price - discount) * Array(cartItems.map((item) => item.quantity))}
          </p>
        </div>
      </div>
      <div className="col-12 text-success py-3 fw-bolder">
        <p>
          You will save ₹
          {discount * Array(cartItems.map((item) => item.quantity))} on this
          order
        </p>
      </div>
    </>
  );
}
