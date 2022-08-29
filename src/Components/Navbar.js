import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-blue">
        <div className="container-fluid d-flex w-75">
          <div className="d-flex flex-column ">
            <a className="navbar-brand pb-0 " href="#">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt=""
                className="filpkart-icon"
              />
            </a>
            <a className="text-light fst-italic hover-anchor-underline">
              Explore <span className="Explore_Plus"> Plus</span>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt=""
                className="Explore_icon-navbar"
              />
            </a>
          </div>

          <form className="d-flex width-Searchbar ">
            <input
              className="form-control me-2 search-Bar-shadow p-2 ps-3"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
            <SearchOutlinedIcon className="position-absolute margin-icons" />
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex align-items-center justify-content-evenly w-100">
              <li className="nav-item">
                <button className="btn btn-light Login-Button">Login</button>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light fw-bold" href="#">
                  Become a Seller
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light fw-bold"
                  href="#"
                  tabIndex="-1"
                >
                  More <KeyboardArrowDownOutlinedIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-bold"
                  href="#"
                  tabIndex="-1"
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
