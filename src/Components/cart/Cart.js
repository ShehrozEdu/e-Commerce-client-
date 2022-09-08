import React, { useState } from "react";

import { useSelector } from "react-redux";
import ButtonPagination from "./ButtonPagination";
import CartItem from "./CartItem";
import OrderButton from "./OrderButton";
import TotalView from "./TotalView";
import { post } from "../../utils/paytm";
import { payUsingPaytm } from "../Users/api";

export default function Cart() {
  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "codeforinterview01@gmail.com",
    });
    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };
  const { cartItems } = useSelector((state) => state.cart);
  let [itemsValue, setItemsValue] = useState([1]);
  const [test, setTest] = useState([]);

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

              {/* left-cart */}
              <div className="col-lg-12 col-sm-12 mb-5  mt-2">
                <div className="cart-product ">
                  {cartItems.map((item, index) => (
                    <>
                      <CartItem item={item} index={index} />
                      <ButtonPagination
                        item={item}
                        itemsValue={itemsValue}
                        setItemsValue={setItemsValue}
                        index={index}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>

            {/* right  */}
            <div className="col-lg-4 col-sm-12   price-detail   mt-sm-1 mt-xs-4 ">
              <TotalView
                cartItems={cartItems}
                itemsValue={itemsValue}
                setItemsValue={setItemsValue}
              />
            </div>
          </div>
          <OrderButton />
        </div>
      ) : (
        <div>EMpty</div>
      )}
    </>
  );
}
