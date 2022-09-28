import React from "react";
import { useState, useEffect } from "react";

export default function TotalView({ cartItems, itemsValue, setItemsValue }) {
  // console.log("cartItems:", cartItems);
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems, itemsValue]);

  const totalAmount = () => {
    let totalPrice = cartItems
      .map((item) => item.quantity * item.cost)
      .reduce((ac, cv) => ac + cv, 0);

    let maxMrp = cartItems
      .map((item) => item.quantity * item.mrp)
      .reduce((ac, cv) => ac + cv, 0);
    let disc = maxMrp - totalPrice;
    setTotalMRP(maxMrp);
    setDiscount(disc);
    setTotalPrice(totalPrice);
  };
  return (
    <>
      <div className=" col-lg-12 py-2 price-head text-muted">
        <p className="fw-lighter mx-1 fs-6">PRICE DETAILS</p>
      </div>

      <div className="price-section row">
        <div className="col-8 fw-bolder py-2">
          <p>Price ({cartItems.length} item )</p>
        </div>
        <div className="col-4  py-2">
          <p>₹ {totalMRP}</p>
        </div>

        <div className="col-8 fw-bolder py-2">
          <p>Discount</p>
        </div>
        <div className="col-4 py-2">
          <p className="text-success">
            -₹
            {discount}
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
          <p>₹{totalPrice}</p>
        </div>
      </div>
      <div className="col-12 text-success py-3 fw-bolder">
        <p>You will save ₹{discount} on this order</p>
      </div>
    </>
  );
}
