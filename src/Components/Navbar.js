import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-blue">
        <div className="container-fluid d-flex w-75">
          <div className="d-flex flex-column me-2">
            <a className="navbar-brand pb-0 " href="#">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt=""
                className="filpkart-icon"
              />
            </a>
            <a className="text-light fst-italic hover-anchor-underline small">
              Explore <span className="Explore_Plus "> Plus</span>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt=""
                className="Explore_icon-navbar "
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex align-items-center after-search-Bar-anchor justify-content-evenly w-100">
              {/* ///////////////////// Login dropdown/////////////////////////// */}

              <li className="nav-item">
                <div className="dropdown" style={{ float: "left " }}>
                  <button className="btn btn-light Login-Button text-primary fw-bold dropbtn">
                    Login
                  </button>
                  <div className="dropdown-content" style={{ left: 0 }}>
                    <ul className="list-group position-absolute">
                      <li className="list-group-item fs-6 fw-bold p-3">
                        New Costumer ?
                        <span className="text-primary ms-5">SignUp</span>
                      </li>
                      <li className="list-group-item">My Profile</li>
                      <li className="list-group-item">Flip Cart Plus Zone</li>
                      <li className="list-group-item">Order</li>
                      <li className="list-group-item">Wishlist</li>
                      <li className="list-group-item">Reward</li>
                      <li className="list-group-item">Giftcard</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light fw-bold" href="#">
                  Become a Seller
                </a>
              </li>
              {/* ////////////////// More Dropdown/////////////////////// */}

              <li className="nav-item">
                <div className="dropdown" style={{ float: "left " }}>
                  <button className="btn  text-light fw-bold dropbtn">
                    More <KeyboardArrowDownOutlinedIcon />
                  </button>
                  <div className="dropdown-content" style={{ left: 0 }}>
                    <ul className="list-group position-absolute">
                      <li className="list-group-item">
                        Notification Preference
                      </li>
                      <li className="list-group-item">24/7 Customer Care</li>
                      <li className="list-group-item">Advertise</li>
                      <li className="list-group-item">Download App</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light fw-bold"
                  href="#"
                  tabIndex="-1"
                >
                  <i
                    className="fa fa-shopping-cart me-1"
                    aria-hidden="true"
                  ></i>
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
