import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPagination from "./ButtonPagination";
import CartItem from "./CartItem";
import OrderButton from "./OrderButton";
import TotalView from "./TotalView";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  // const { cartItems } = useSelector((state) => state.electronicsCart);
  let [itemsValue, setItemsValue] = useState([1]);

  return (
    <>
      {cartItems.length !== 0 ? (
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
            <div className="col-lg-4 col-sm-12  position-sticky  price-detail   mt-sm-1 mt-xs-4 ">
              <TotalView
                cartItems={cartItems}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                itemsValue={itemsValue}
                setItemsValue={setItemsValue}
              />
            </div>
          </div>
          <OrderButton totalPrice={totalPrice} />
        </div>
      ) : (
        <section className="d-flex justify-content-center empty-cart-sec">
          <div className="empty-cart shadow col-11 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
              className="empty-cart-image "
            />
            <h4 className="mt-2">Your cart is empty!</h4>
            <p>Add items to it now</p>
            <Link to={"/product-list"}>
              <button className="btn btn-primary px-5">Shop Now</button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
