import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Homepage/Footer";
import { getProductsDetails } from "../../Redux/Actions/ProductAction";
// import { TailSpin } from "react-loader-spinner";
import ProductBelowNavbar from "./ProductBelowNavbar";

import CartButtons from "./CartButtons";
import ProductSkeleton from "../../utils/ProductSkeleton";

export default function ProductsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  console.log(product);

  useEffect(() => {
    dispatch(getProductsDetails(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  // Helper function to safely get nested values
  const getProductTitle = () => {
    return product?.title?.longTitle || product?.longTitle || "Product Name";
  };

  const getProductPrice = () => {
    return {
      cost: product?.price?.cost || product?.cost || 0,
      mrp: product?.price?.mrp || product?.mrp || 0,
      discount: product?.price?.discount || product?.discount || "0%"
    };
  };

  const getProductRating = () => {
    return {
      rating: product?.rating || 4.0,
      reviews: product?.reviews || 100
    };
  };

  return (
    <>
      <ProductBelowNavbar />
      {product && Object.keys(product).length > 0 ? (
        <section className="row d-flex justify-content-end container-fluid ">
          <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 p-5 pt-2 d-flex flex-column align-items-center  h-75 test-fixed ">
            <div>
              <img
                src={product.detailUrl}
                alt={getProductTitle()}
                className="border p-3 custom-product-image align-self-center"
              />
            </div>

            <CartButtons product={product} />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12   ms-3 product-right">
            <div className="mt-2">
              <div>
                <h5 className="">{getProductTitle()}</h5>
              </div>
              <div className="small text-muted d-flex m-0 p-0">
                <p className="">
                  {getProductRating().rating} ⭐ • {getProductRating().reviews.toLocaleString()} Ratings & Reviews
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
                <h3>₹{getProductPrice().cost.toLocaleString()}</h3>
                <span>
                  <strike>
                    <h5 className="text-muted ms-3 mt-1">₹{getProductPrice().mrp.toLocaleString()}</h5>
                  </strike>
                </span>
                <span className="text-success ms-3">{getProductPrice().discount} off</span>
              </div>

              {/* Brand and Category Information */}
              {(product.brand || product.category) && (
                <div className="mt-2 mb-3">
                  {product.brand && (
                    <span className="badge bg-primary me-2">Brand: {product.brand}</span>
                  )}
                  {product.category && (
                    <span className="badge bg-secondary me-2">Category: {product.category}</span>
                  )}
                  {product.subcategory && (
                    <span className="badge bg-info">Subcategory: {product.subcategory}</span>
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
                  <p className="ms-5 ">{product.warranty || "1 year warranty"}</p>
                  <hr />
                  <p className="ms-5">{product.brand || "Brand"} Official Store</p>
                  <p className="ms-5"> GST Included</p>
                  <p className="ms-5 text-primary"> View more Sellers</p>
                  <hr />
                  <p className="ms-5 ">{product.description || "No description available"}</p>
                  
                  {/* Display additional product specifications if available */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div className="ms-5 mt-3">
                      <h6 className="fw-bold">Specifications:</h6>
                      {Object.entries(product.specifications).map(([key, value]) => (
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
