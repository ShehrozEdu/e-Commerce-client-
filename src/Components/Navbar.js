import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Login from "./Login";
import { Link } from "react-router-dom";
import { DataContext } from "./Context/ContextApi";

export default function Navbar() {
  const initialSignUpValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };
  const initialLoginValues = {
    email: "",
    password: "",
  };
  let [page, setPage] = useState(true);
  let [signUp, setSignUp] = useState(initialSignUpValues);
  let { account } = useContext(DataContext);
  let [login, setLogin] = useState(initialLoginValues);
  let [error, setError] = useState(false);
  // let test = localStorage.getItem("userInfo");
  return (
    <>
      <Login
        page={page}
        signUp={signUp}
        setSignUp={setSignUp}
        setPage={setPage}
        login={login}
        setLogin={setLogin}
        setError={setError}
        error={error}
      />
      <nav className="navbar navbar-expand-lg navbar-light nav-blue nav-height navbar-fixed">
        <div className="container-fluid m-0 p-0 d-flex">
          <div className="d-flex  flex-column me-2 margin-nav ms-md-0 ms-3">
            <a className="navbar-brand pb-0 " href="/">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt=""
                className="filpkart-icon"
              />
            </a>
            <a className="text-light fst-italic hover-anchor-underline small">
              Explore <span className="Explore_Plus "> Plus</span>
              <sup>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                  className="Explore_icon-navbar "
                />
              </sup>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex align-items-center after-search-Bar-anchor justify-content-evenly w-100 ">
              {/* ///////////////////// Login dropdown/////////////////////////// */}

              <li className="nav-item">
                <div className="dropdown" style={{ float: "left " }}>
                  {account ? (
                    <button className=" text-light fw-bold bg-transparent border-0">
                      {account} <KeyboardArrowDownOutlinedIcon />
                    </button>
                  ) : (
                    <button
                      className="btn btn-light Login-Button text-primary fw-bold dropbtn position-relative"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Login
                    </button>
                  )}
                  <div className="dropdown-content" style={{ left: -90 }}>
                    <ul className="list-group position-absolute z-index">
                      <i
                        className="fa-solid fa-caret-up mt-2 "
                        style={{
                          background: "transparent",
                          color: "white",
                          fontSize: 30,
                          lineHeight: 0,
                          marginLeft: 140,
                        }}
                      ></i>
                      <li className="list-group-item fs-6 fw-bold p-3 d-flex  align-items-center">
                        New Customer ?
                        <span className="text-primary ms-5 signUp-underline">
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => setPage(false)}
                          >
                            SignUp
                          </a>
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i
                          className="fa fa-user-circle me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        My Profile
                      </li>
                      <li className="list-group-item">
                        <i
                          className="fa fa-plus me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        FlipKart Plus Zone
                      </li>
                      <li className="list-group-item">
                        <i
                          className="fa fa-cart-arrow-down  me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        Order
                      </li>
                      <li className="list-group-item">
                        <i
                          className="fa fa-heart  me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        Wishlist
                      </li>
                      <li className="list-group-item ">
                        <i
                          className="fa fa-ticket  me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        Reward
                      </li>
                      <li className="list-group-item">
                        <i
                          className="fa fa-gift me-3 text-primary "
                          aria-hidden="true"
                        ></i>
                        Gift Cards
                      </li>
                      {account ? (
                        <li
                          className="list-group-item"
                          onClick={() => window.location.reload()}
                        >
                          <i
                            className="fa fa-sign-out me-3 text-primary"
                            aria-hidden="true"
                          ></i>
                          Logout
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </li>

              {/* /////////////// seller //////////////// */}

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
                  <div className="dropdown-content" style={{ left: -90 }}>
                    <ul className="list-group position-absolute">
                      <i
                        className="fa-solid fa-caret-up mt-2 "
                        style={{
                          background: "transparent",
                          color: "white",
                          fontSize: 30,
                          lineHeight: 0,
                          marginLeft: 110,
                        }}
                      ></i>
                      <li className="list-group-item p-3">
                        <i
                          className="fa fa-bell text-primary me-3"
                          aria-hidden="true"
                        ></i>
                        Notification Preference
                      </li>
                      <li className="list-group-item p-3">
                        <i
                          className="fa fa-question-circle-o text-primary me-3"
                          aria-hidden="true"
                        ></i>
                        24/7 Customer Care
                      </li>
                      <li className="list-group-item p-3">
                        <i
                          className="fa fa-line-chart text-primary me-3"
                          aria-hidden="true"
                        ></i>
                        Advertise
                      </li>
                      <li className="list-group-item p-3 ">
                        <i
                          className="fa fa-download text-primary me-3"
                          aria-hidden="true"
                        ></i>
                        Download App
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-link text-light  fw-bold"
                  tabIndex="-1"
                >
                  <i
                    className="fa fa-shopping-cart me-1"
                    aria-hidden="true"
                  ></i>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
