import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Homepage/Footer";
import { getElectronicsDetails } from "../../Redux/Actions/ElectronicsAction";
import ProductBelowNavbar from "./ProductBelowNavbar";

import ElectronicCartButtons from "./ElectronicCartButtons";

export default function ElectronicsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, electronics } = useSelector(
    (state) => state.getElectronicsDetails
  );
  console.log(electronics);

  useEffect(() => {
    dispatch(getElectronicsDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <ProductBelowNavbar />
      {electronics && (
        <section className="row d-flex justify-content-end container-fluid ">
          <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 p-5 pt-2 d-flex flex-column align-items-center  h-75 test-fixed position-lg-sticky">
            <div className="p-2">
              <img
                src={electronics.detailUrl}
                alt="electronics"
                className="border p-3 custom-product-image align-self-center"
              />
            </div>
            <ElectronicCartButtons electronics={electronics} />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12   ms-3 product-right">
            <div className="mt-2">
              <div>
                <h5 className=" ">{electronics.longTitle}</h5>
              </div>
              <div className="small text-muted d-flex m-0 p-0">
                <p className="">9,718 Ratings & 1,350 Reviews</p>
                <span>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt=""
                    className="ms-2 flip-assured-icon"
                  />
                </span>
              </div>
              <div className="d-flex align-items-center">
                <h3>₹{electronics.cost}</h3>
                <span>
                  <strike>
                    <h5 className="text-muted ms-3 mt-1">₹{electronics.mrp}</h5>
                  </strike>
                </span>
                <span className="text-success ms-3">
                  {electronics.discount}
                </span>
              </div>

              <div className="mt-2">
                <h5 className="small fw-bold fs-6">Available offers</h5>

                <h5 className="text-muted small mt-3">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i class="fa-solid fa-tag text-success me-2"></i> Partner
                    Offer
                  </span>
                  Buy this product and Get Extra 10% Up to ₹500 off on Home &
                  Kitchen Appliances
                </h5>

                <h5 className="text-muted small">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i class="fa-solid fa-tag text-success me-2"></i> Partner
                    Offer
                  </span>
                  Purchase this product & win a surprise cashback coupon for The
                  Big Billion Days Sale 2022
                </h5>

                <h5 className="text-muted small">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i class="fa-solid fa-tag text-success me-2"></i> Bank Offer
                  </span>
                  10% instant discount on SBI Mastercard Debit Cards, up to ₹250
                  on orders of ₹2,500 and above
                </h5>

                <h5 className="text-muted small">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i class="fa-solid fa-tag text-success me-2"></i> Bank Offer
                  </span>
                  5% Cashback on Flipkart Axis Bank Card
                </h5>
              </div>

              {/* descriptions */}

              <div className="col-12 d-flex mt-5 small">
                <div className="col-1">
                  <p className="text-muted"> Delivery</p>
                  <hr />
                  <p className="text-muted"> Warranty</p>
                  <hr />
                  <p className="text-muted"> Seller</p>
                  <br />
                  <br />

                  <hr className="marginHR" />
                  <p className="mt-1 text-muted"> Description</p>
                </div>
                <div className="col-10 ">
                  <p className="ms-5 fw-bold"> Delivery by May 2022 | ₹40</p>
                  <hr />
                  <p className="ms-5 "> {electronics.warranty}</p>
                  <hr />
                  <p className="ms-5">Company Ltd.</p>
                  <p className="ms-5"> GST</p>
                  <p className="ms-5 text-primary"> View more Sellers</p>
                  <hr />
                  <p className="ms-5 ">{electronics.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
