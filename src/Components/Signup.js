import React from "react";

export default function Signup(props) {
  let { setPage } = props;
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ">
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
                  <h2 className="fw-bold fs-3">Looks like you're new here</h2>
                  <p className="col-10 py-3 fs-5">Signup to get started</p>
                  <div className="Login-email-logo">
                    <img
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                      alt=""
                    />
                  </div>
                </section>
              </div>
              {/* right part */}
              <div className="col-7 pt-0">
                <section className=" text-dark py-5  pt-3 p-2 px-3">
                  <form className="col-11">
                    <div className="mb-3">
                      <label
                        for="First_Name"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 border-bottom border-primary  p-0"
                        id="First_Name"
                        aria-describedby="emailHelp"
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
                      />
                    </div>
                    <button
                      className=" form-login fw-bold shadow col-12 py-2"
                      onClick={() => setPage()}
                    >
                      Continue
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
