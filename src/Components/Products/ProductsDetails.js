import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Homepage/Footer";
import { getProductsDetails } from "../../Redux/Actions/ProductAction";
import { TailSpin } from "react-loader-spinner";
import ProductBelowNavbar from "./ProductBelowNavbar";

export default function ProductsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  // console.log(product);

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <ProductBelowNavbar />
      {product && (
        <section className="col-12 d-flex justify-content-end container-fluid ">
          {/* <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          /> */}
          <div className="col-4 p-5 pt-2 d-flex flex-column align-items-center  h-75 test-fixed ">
            <div>
              <div>
                <img
                  src={product.detailUrl}
                  alt=""
                  className="border p-3 custom-product-image"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn  py-3 px-2 font-product-btn cart-btn">
                <i class="fa-solid fa-cart-shopping me-2"></i>ADD TO CART
              </button>
              <button className="btn text-light ms-5 px-3 font-product-btn bolt-btn">
                <i class="fa-solid fa-bolt me-2"></i>BUY NOW
              </button>
            </div>
          </div>
          <div className="col-7  ms-3 product-right">
            <div className="mt-2">
              <div>
                <h5 className=" ">{product.title.longTitle}</h5>
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
                <h3>₹{product.price.cost}</h3>
                <span>
                  <strike>
                    <h5 className="text-muted ms-3 mt-1">
                      ₹{product.price.mrp}
                    </h5>
                  </strike>
                </span>
                <span className="text-success ms-3">{product.discount}</span>
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
                  <p className="ms-5 "> {product.warranty}</p>
                  <hr />
                  <p className="ms-5">Company Ltd.</p>
                  <p className="ms-5"> GST</p>
                  <p className="ms-5 text-primary"> View more Sellers</p>
                  <hr />
                  <p className="ms-5 ">{product.description}</p>
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
