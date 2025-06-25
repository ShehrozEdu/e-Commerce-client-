import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Login from "./Login";
import { Link } from "react-router-dom";
import { DataContext } from "./Context/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Actions/ProductAction";

export default function Navbar() {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProduct);
  const { cartItems } = useSelector((state) => state.cart);
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
  const context = useContext(DataContext);
  let [login, setLogin] = useState(initialLoginValues);
  let [error, setError] = useState(false);
  let [text, setText] = useState("");

  // Safely access account from context
  const account = context?.account || null;

  let logOut = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  let getText = (text) => {
    setText(text);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          <div className="d-flex flex-column me-2 margin-nav ms-md-0 ms-3">
            <Link to="/" className="navbar-brand pb-0 ">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt=""
                className="filpkart-icon"
              />
            </Link>
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

          <form className=" width-Searchbar ">
            <div className="d-flex">
              <input
                className="form-control me-2 search-Bar-shadow p-2 ps-3"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
                value={text}
                onChange={(event) => getText(event.target.value)}
              />
              <SearchOutlinedIcon className="position-absolute margin-icons bg-light" />
            </div>
            {text && (
              <ul className="custom-suggestion position-absolute">
                {products
                  .filter((product) =>
                    product.longTitle.toLowerCase().includes(text.toLowerCase())
                  )
                  .map((product, index) => (
                    <Link
                      key={index}
                      to={`/product-overview/${product._id}`}
                      onClick={() => setText(product.longTitle)}
                    >
                      {text === product.longTitle ? null : (
                        <li className="list-group-item small">
                          <SearchOutlinedIcon className="text-muted me-2" />
                          {product.longTitle}
                        </li>
                      )}
                    </Link>
                  ))}
                {products.length > 0 &&
                  products.filter((product) =>
                    product.longTitle.toLowerCase().includes(text.toLowerCase())
                  ).length === 0 && (
                    <li className="list-group-item small">No results found.</li>
                  )}
              </ul>
            )}
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
              {/* Login dropdown */}
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
                      <li className="list-group-item">
                        <i
                          className="fa fa-gift  me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        Rewards
                      </li>
                      <li className="list-group-item">
                        <i
                          className="fa fa-gift  me-3 text-primary"
                          aria-hidden="true"
                        ></i>
                        Gift Cards
                      </li>
                      {account && (
                        <li
                          className="list-group-item"
                          onClick={() => {
                            logOut();
                          }}
                        >
                          <i
                            className="fa fa-sign-out  me-3 text-primary"
                            aria-hidden="true"
                          ></i>
                          Logout
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-link text-light fw-bold"
                  aria-current="page"
                >
                  <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                  Cart {cartItems?.length > 0 && `(${cartItems.length})`}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
