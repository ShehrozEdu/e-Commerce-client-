import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const initialSignUpValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  let [page, setPage] = useState(true);
  let [signUp, setSignUp] = useState(initialSignUpValues);
  let userSignUpData = async () => {
    let URL = "http://localhost:7000/api/signup";
    try {
      let response = await axios.post(URL);
      console.log(response);
      let { status, result } = response.data;
      if (status) {
      } else {
      }
    } catch (error) {}
  };
  let SignupInputData = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value });
    console.log(signUp);
  };

  return (
    <>
      <div
        className="modal fade mt-5 z-index-popup"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content  ">
            <div className="d-flex justify-content-end ">
              <button
                type="button"
                className="btn-close position-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="row">
              <div className="col-5">
                <section className="nav-blue p-5 text-light">
                  <h2 className="fw-bold fs-3">
                    {page === true ? "Login" : "Looks like you're new here!"}
                  </h2>
                  <p className="col-12 py-3 small fs-5">
                    {page === true
                      ? "Get access to your Orders, Wishlist and Recommendations"
                      : "Sign up with your mobile number to get started"}
                  </p>
                  <div className="Login-email-logo">
                    <img
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                      alt=""
                    />
                  </div>
                </section>
              </div>
              {/* right part */}
              {page === true ? (
                <div className="col-7">
                  <section className=" text-dark py-5 p-2 px-3">
                    <form className="col-11">
                      <div className="mb-3">
                        <label
                          for="exampleInputEmail1"
                          className="form-label mb-0 p-0 text-muted small"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="exampleInputPassword1"
                          className="form-label mb-0 p-0 text-muted small"
                        >
                          Enter Password
                        </label>
                        <input
                          type="password"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div className="mb-3 form-check p-0">
                        <p className=" terms-condition text-muted ">
                          By continuing, you agree to Flipkart's
                          <a href="#" className="ms-1 me-1">
                            Terms of Use
                          </a>
                          and
                          <a href="#" className="ms-1">
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <button className="btn form-login col-12 py-2 shadow fw-bold mt-2">
                          Login
                        </button>
                        <p
                          className="text-primary create-account"
                          onClick={() => setPage(false)}
                        >
                          New to Flipkart? Create an account
                        </p>
                      </div>
                    </form>
                  </section>
                </div>
              ) : (
                <div className="col-7 pt-0">
                  <section className=" text-dark py-5  pt-3 p-2 px-3">
                    <form className="col-11">
                      <div className="mb-3">
                        <label
                          for="first_Name"
                          className="form-label mb-0 p-0 small text-muted"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="first_Name"
                          name="firstName"
                          aria-describedby="firstName"
                          onChange={(event) => {
                            SignupInputData(event);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="Last_Name"
                          className="form-label mb-0 p-0 small text-muted"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="Last_Name"
                          name="lastName"
                          onChange={(event) => {
                            SignupInputData(event);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="User_Name"
                          className="form-label mb-0 p-0 small text-muted"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="User_Name"
                          name="userName"
                          onChange={(event) => {
                            SignupInputData(event);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="Email"
                          className="form-label mb-0 p-0 small text-muted"
                        >
                          Enter Email
                        </label>
                        <input
                          type="email"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="Email"
                          name="email"
                          onChange={(event) => {
                            SignupInputData(event);
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="Password"
                          className="form-label mb-0 p-0 small text-muted"
                        >
                          Enter Password
                        </label>
                        <input
                          type="password"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="Password"
                          name="password"
                          onChange={(event) => {
                            SignupInputData(event);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="Phone"
                          className="form-label mb-0 p-0 small text-muted small text-muted"
                        >
                          Enter Phone
                        </label>
                        <input
                          type="number"
                          className="form-control border-0 border-bottom border-primary  p-0"
                          id="Phone"
                          name="phoneNumber"
                          onChange={(event) => {
                            SignupInputData(event);
                          }}
                        />
                      </div>
                      <button
                        className="btn form-login fw-bold shadow col-12 py-2"
                        onClick={() => userSignUpData()}
                      >
                        Continue
                      </button>
                      <button
                        className="btn text-primary mt-3 border Existing-User col-12 py-2"
                        onClick={() => setPage(true)}
                      >
                        Existing User? Login
                      </button>
                    </form>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
