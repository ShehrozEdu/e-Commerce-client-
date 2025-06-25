import React from "react";

export default function CartItem({ item }) {
  // Helper functions to safely get nested values
  const getItemTitle = () => {
    return item?.title?.shortTitle || item?.shortTitle || "Product";
  };

  const getItemPrice = () => {
    return {
      cost: item?.price?.cost || item?.cost || 0,
      mrp: item?.price?.mrp || item?.mrp || 0,
      discount: item?.price?.discount || item?.discount || "0%"
    };
  };

  return (
    <>
      <div className="d-flex py-4 border-top">
        <div className="col-lg-2 col-4 text-sm-center ms-2 me-5 ">
          <img className="product-img m-2" src={item.url} alt={getItemTitle()} />
        </div>
        <div className="text-sm-start ">
          <div className="col-lg-7 col-6  ">
            <p className="fs-6 ">{getItemTitle()}</p>
            <div className="d-flex align-items-center">
              <p className="fs-7 text-muted me-2 ">Seller: {item.seller || item.brand || "FLIPKART"} RETAILS</p>
              <div className="mb-3">
                <img
                  className="assured"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt="Flipkart Assured"
                />
              </div>
            </div>
          </div>
          <p className="">
            <span className="text-decoration-line-through text-muted">
              ₹{getItemPrice().mrp.toLocaleString()}
            </span>
            <strong className=" px-1">₹{getItemPrice().cost.toLocaleString()}</strong>
            <span className="text-success fw-bold px-2 discount-text-cart">
              {getItemPrice().discount} • 2 offers applied
            </span>
            <p className=" small ">
              Delivery by 3-5 Business Days | <span className="text-success">Free </span>
              <span className="text-decoration-line-through"> ₹40</span>
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
