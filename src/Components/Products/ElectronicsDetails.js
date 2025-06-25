import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Homepage/Footer";
import { getElectronicsDetails } from "../../Redux/Actions/ElectronicsAction";
// import { TailSpin } from "react-loader-spinner";
import ProductBelowNavbar from "./ProductBelowNavbar";

import ElectronicCartButtons from "./ElectronicCartButtons";
import ProductSkeleton from "../../utils/ProductSkeleton";

export default function ElectronicsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, electronics } = useSelector(
    (state) => state.getElectronicsDetails
  );
  console.log(electronics);

  useEffect(() => {
    dispatch(getElectronicsDetails(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  // Helper functions to safely get nested values
  const getElectronicsTitle = () => {
    return electronics?.title?.longTitle || electronics?.longTitle || "Electronics Product";
  };

  const getElectronicsPrice = () => {
    return {
      cost: electronics?.price?.cost || electronics?.cost || 0,
      mrp: electronics?.price?.mrp || electronics?.mrp || 0,
      discount: electronics?.price?.discount || electronics?.discount || "0%"
    };
  };

  const getElectronicsRating = () => {
    return {
      rating: electronics?.rating || 4.0,
      reviews: electronics?.reviews || 100
    };
  };

  return (
    <>
      <ProductBelowNavbar />
      {electronics && Object.keys(electronics).length > 0 ? (
        <section className="row d-flex justify-content-end container-fluid ">
          <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 p-5 pt-2 d-flex flex-column align-items-center  h-75 test-fixed position-lg-sticky">
            <div className="p-4">
              <img
                src={electronics.detailUrl}
                alt={getElectronicsTitle()}
                className="border p-3 custom-product-image align-self-center"
              />
            </div>
            <ElectronicCartButtons electronics={electronics} />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12   ms-3 product-right">
            <div className="mt-2">
              <div>
                <h5 className="">{getElectronicsTitle()}</h5>
              </div>
              <div className="small text-muted d-flex m-0 p-0">
                <p className="">
                  {getElectronicsRating().rating} ⭐ • {getElectronicsRating().reviews.toLocaleString()} Ratings & Reviews
                </p>
                <span>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="Flipkart Assured"
                    className="ms-2 flip-assured-icon"
                  />
                </span>
              </div>
              <div className="d-flex align-items-center">
                <h3>₹{getElectronicsPrice().cost.toLocaleString()}</h3>
                <span>
                  <strike>
                    <h5 className="text-muted ms-3 mt-1">₹{getElectronicsPrice().mrp.toLocaleString()}</h5>
                  </strike>
                </span>
                <span className="text-success ms-3">{getElectronicsPrice().discount} off</span>
              </div>

              {/* Brand and Category Information */}
              {(electronics.brand || electronics.category) && (
                <div className="mt-2 mb-3">
                  {electronics.brand && (
                    <span className="badge bg-primary me-2">Brand: {electronics.brand}</span>
                  )}
                  {electronics.category && (
                    <span className="badge bg-secondary me-2">Category: {electronics.category}</span>
                  )}
                  {electronics.subcategory && (
                    <span className="badge bg-info">Subcategory: {electronics.subcategory}</span>
                  )}
                </div>
              )}

              <div className="mt-2">
                <h5 className="small fw-bold fs-6">Available offers</h5>

                <h5 className="text-muted small mt-3">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i className="fa-solid fa-tag text-success me-2"></i> Partner
                    Offer
                  </span>
                  Buy this product and Get Extra 10% Up to ₹500 off on Home &
                  Kitchen Appliances
                </h5>

                <h5 className="text-muted small">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i className="fa-solid fa-tag text-success me-2"></i> Partner
                    Offer
                  </span>
                  Purchase this product & win a surprise cashback coupon for The
                  Big Billion Days Sale 2024
                </h5>

                <h5 className="text-muted small">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i className="fa-solid fa-tag text-success me-2"></i> Bank Offer
                  </span>
                  10% instant discount on SBI Mastercard Debit Cards, up to ₹250
                  on orders of ₹2,500 and above
                </h5>

                <h5 className="text-muted small">
                  <span className="fw-bold text-dark small fs-6 me-2">
                    <i className="fa-solid fa-tag text-success me-2"></i> Bank Offer
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
                  <hr className="mt-lg-0 mt-md-0 marWarranty" />
                  <p className="text-muted"> Seller</p>
                  <br />
                  <br />

                  <hr className="marginHR" />
                  <p className="mt-1 text-muted"> Description</p>
                </div>
                <div className="col-10 ">
                  <p className="ms-5 fw-bold"> Delivery by 3-5 Business Days | ₹40</p>
                  <hr />
                  <p className="ms-5 ">{electronics.warranty || "1 year warranty"}</p>
                  <hr />
                  <p className="ms-5">{electronics.seller || electronics.brand || "Brand"} Official Store</p>
                  <p className="ms-5"> GST Included</p>
                  <p className="ms-5 text-primary"> View more Sellers</p>
                  <hr />
                  <p className="ms-5 ">{electronics.description || "No description available"}</p>
                  
                  {/* Display additional electronics specifications if available */}
                  {electronics.specifications && Object.keys(electronics.specifications).length > 0 && (
                    <div className="ms-5 mt-3">
                      <h6 className="fw-bold">Specifications:</h6>
                      {Object.entries(electronics.specifications).map(([key, value]) => (
                        <p key={key} className="small mb-1">
                          <strong>{key}:</strong> {value}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ProductSkeleton />
      )}
      <Footer />
    </>
  );
}
