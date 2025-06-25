import React from "react";
import { useState, useEffect } from "react";

export default function TotalView({
  cartItems,
  itemsValue,
  setItemsValue,
  totalPrice,
  setTotalPrice,
}) {
  const [totalMRP, setTotalMRP] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems, itemsValue]);

  // Helper function to safely get item price
  const getItemPrice = (item) => {
    return {
      cost: item?.price?.cost || item?.cost || 0,
      mrp: item?.price?.mrp || item?.mrp || 0
    };
  };

  const totalAmount = () => {
    let totalPrice = cartItems
      .map((item) => {
        const price = getItemPrice(item);
        return item.quantity * price.cost;
      })
      .reduce((ac, cv) => ac + cv, 0);

    let maxMrp = cartItems
      .map((item) => {
        const price = getItemPrice(item);
        return item.quantity * price.mrp;
      })
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
          <p>Price ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</p>
        </div>
        <div className="col-4  py-2">
          <p>₹{totalMRP.toLocaleString()}</p>
        </div>

        <div className="col-8 fw-bolder py-2">
          <p>Discount</p>
        </div>
        <div className="col-4 py-2">
          <p className="text-success">
            -₹{discount.toLocaleString()}
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
          <p>₹{(totalPrice + 29).toLocaleString()}</p>
        </div>
      </div>
      <div className="col-12 text-success py-3 fw-bolder">
        <p>You will save ₹{discount.toLocaleString()} on this order</p>
      </div>
    </>
  );
}
