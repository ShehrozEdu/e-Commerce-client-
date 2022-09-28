import React from "react";
import { useSelector } from "react-redux";
import ButtonPagination from "./ButtonPagination";

export default function CartItem({ item }) {
  return (
    <>
      <div className="d-flex py-4">
        <div className="col-lg-2 col-sm-6 text-sm-center ms-2 me-5 ">
          <img className="product-img m-2" src={item.url} alt="" />
        </div>
        <div className="text-sm-start ">
          <div className="col-lg-6 col-sm-6  ">
            <p className="fs-5 ">{item.shortTitle}</p>
            <p className="fs-6 fw-lighter ">
              Seller:NGIVR RETAILS
              <span>
                <img
                  className="assured"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </span>
            </p>
          </div>
          <p className="fs-6 my-2">
            <span className="text-decoration-line-through text-muted">
              ₹{item.price.mrp}
            </span>
            <span className="fs-5 fw-bold px-1">₹{item.cost}</span>
            <span className="text-success fw-bold px-2">
              {item.discount} Off 2 offers applied
            </span>
            <p className=" small ">
              Delivery by Sat Sep 3 |<span className="text-success">Free </span>
              <span className="text-decoration-line-through"> ₹40</span>
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
