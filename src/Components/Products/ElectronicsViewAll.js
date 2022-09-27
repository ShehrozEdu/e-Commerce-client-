import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductBelowNavbar from "./ProductBelowNavbar";

export default function ElectronicsViewAll() {
  const { electronics } = useSelector((state) => state.getElectronics);
  return (
    <>
      <ProductBelowNavbar />
      <section className="my-1 mx-1 bg-light">
        <div>
          <div className="d-flex justify-content-center border-bottom border-muted">
            <div className="d-flex flex-column align-items-center p-4 ">
              <h4 className="fw-bold">Best of Electronics</h4>
              <p className="text-muted">Items {electronics.length}</p>
            </div>
          </div>
          <section className="bg-light">
            <div className="d-flex justify-content-center w-100">
              <div className="product-list col-12  d-flex  w-100 flex-wrap ">
                {electronics.map((item, index) => {
                  return (
                    <div
                      className="align-items-center d-flex flex-column w-25 mt-5 "
                      key={index}
                    >
                      <Link to={`/electronics-overview/${item._id}`}>
                        <img src={item.url} alt="" />
                      </Link>
                      <strong className="mb-0 mt-4">{item.shortTitle}</strong>
                      <p className="text-success m-0 mt-1 small">
                        {item.discount}
                      </p>
                      <p className="text-muted mt-1 small">{item.tagline}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
