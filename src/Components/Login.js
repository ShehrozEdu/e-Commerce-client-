import React, { useState, useContext, useEffect } from "react";
import { authenticateSignup, authenticateLogin } from "../Components/Users/api";
import { DataContext } from "./Context/ContextApi";
import { toast } from "react-toastify";

export default function Login({
  page,
  setPage,
  signUp,
  setSignUp,
  setLogin,
  login,
  setError,
  error,
}) {
  const { setAccount } = useContext(DataContext);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const validateSignupForm = () => {
    const errors = {};
    
    if (!signUp.firstName || signUp.firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters";
    }
    
    if (!signUp.lastName || signUp.lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }
    
    if (!signUp.userName || signUp.userName.trim().length < 3) {
      errors.userName = "Username must be at least 3 characters";
    }
    
    if (!signUp.email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signUp.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!signUp.password || signUp.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    if (!signUp.phoneNumber || !/^\d{10}$/.test(signUp.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }
    
    return errors;
  };

  const validateLoginForm = () => {
    const errors = {};
    
    if (!login.email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(login.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!login.password || login.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    return errors;
  };

  const closeModal = () => {
    const modal = document.getElementById('staticBackdrop');
    const backdrop = document.querySelector('.modal-backdrop');
    if (modal && backdrop) {
      modal.style.display = 'none';
      backdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    }
  };

  let SignupInputData = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value });
    // Clear validation error for this field
    if (validationErrors[event.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [event.target.name]: ""
      });
    }
  };

  let userSignUpData = async () => {
    const errors = validateSignupForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      toast.error("Please fix the validation errors before continuing", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setLoading(true);
    setValidationErrors({});
    
    try {
      const response = await authenticateSignup(signUp);
      
      if (response.data?.status) {
        setAccount(response.data.user.userName);
        setShowErrorMessage(false);
        
        // Success toast
        toast.success(`🎉 Welcome ${response.data.user.firstName}! Your account has been created successfully.`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Close modal after success
        setTimeout(() => {
          closeModal();
        }, 500);
        
        // Reset form
        setSignUp({
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
          phoneNumber: "",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      
      if (error.response?.data?.errors) {
        // Handle validation errors from server
        const serverErrors = {};
        error.response.data.errors.forEach(err => {
          if (err.includes('email')) serverErrors.email = err;
          else if (err.includes('username')) serverErrors.userName = err;
          else if (err.includes('phone')) serverErrors.phoneNumber = err;
          else if (err.includes('password')) serverErrors.password = err;
        });
        setValidationErrors(serverErrors);
        
        toast.error("Please fix the validation errors and try again", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (error.response?.data?.message) {
        toast.error(`Registration failed: ${error.response.data.message}`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        setError(true);
        setShowErrorMessage(true);
        toast.error("Registration failed. Please try again later.", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  let loginInputData = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
    // Clear validation error for this field
    if (validationErrors[event.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [event.target.name]: ""
      });
    }
  };

  let userLogin = async () => {
    const errors = validateLoginForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      toast.error("Please fix the validation errors before continuing", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setLoading(true);
    setValidationErrors({});
    
    try {
      const response = await authenticateLogin(login);
      
      if (response.status === 200 && response.data?.status) {
        setAccount(response.data.user.userName);
        setShowErrorMessage(false);
        setError(false);
        
        // Success toast
        toast.success(`🎊 Welcome back, ${response.data.user.firstName}! You're now logged in.`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Close modal after success
        setTimeout(() => {
          closeModal();
        }, 500);
        
        // Reset form
        setLogin({
          email: "",
          password: "",
        });
        
      } else {
        setError(true);
        setShowErrorMessage(true);
        toast.error("Invalid email or password. Please try again.", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(true);
      setShowErrorMessage(true);
      
      if (error.response?.data?.message) {
        toast.error(`Login failed: ${error.response.data.message}`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Login failed. Please check your credentials and try again.", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePageSwitch = (newPage) => {
    if (loading) return;
    
    setPage(newPage);
    setValidationErrors({});
    setError(false);
    setShowErrorMessage(false);
    
    if (newPage) {
      toast.info("Switched to login form", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.info("Ready to create your account!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    // Note: Not using localStorage for user info due to SOC 2 compliance
    // In production, user session should be managed server-side
    setShowErrorMessage(false);
  }, []);

  return (
    <>
      <div
        className="modal fade mt-5 z-index-popup"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelled-by="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-close position-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setPage(true);
                  setValidationErrors({});
                  setError(false);
                  setShowErrorMessage(false);
                }}
                disabled={loading}
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
                      className="login-img"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                      alt="Flipkart Login"
                    />
                  </div>
                </section>
              </div>
              {/* right part */}
              {page === true ? (
                <div className="col-7">
                  <section className="text-dark py-5 p-2 px-3">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label mb-0 p-0 text-muted small"
                      >
                        Email address *
                      </label>
                      <input
                        type="email"
                        className={`form-control border-0 border-bottom ${validationErrors.email ? 'border-danger' : 'border-primary'} p-0`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={login.email}
                        onChange={(event) => loginInputData(event)}
                        disabled={loading}
                        placeholder="Enter your email"
                      />
                      {validationErrors.email && (
                        <small className="text-danger">{validationErrors.email}</small>
                      )}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label mb-0 p-0 text-muted small"
                      >
                        Password *
                      </label>
                      <input
                        type="password"
                        className={`form-control border-0 border-bottom ${validationErrors.password ? 'border-danger' : 'border-primary'} p-0`}
                        id="exampleInputPassword1"
                        name="password"
                        value={login.password}
                        onChange={(event) => loginInputData(event)}
                        disabled={loading}
                        placeholder="Enter your password"
                      />
                      {validationErrors.password && (
                        <small className="text-danger">{validationErrors.password}</small>
                      )}
                    </div>
                    {error && showErrorMessage && (
                      <p className="fw-bold text-danger small text-center">
                        Invalid Username or Password
                      </p>
                    )}
                    <div className="mb-3 form-check p-0">
                      <p className="terms-condition text-muted">
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
                      <button
                        className="btn form-login col-12 py-2 shadow fw-bold mt-2 login-Button"
                        onClick={() => userLogin()}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Logging in...
                          </>
                        ) : (
                          "Login"
                        )}
                      </button>
                      <p
                        className="text-primary create-account mt-3"
                        onClick={() => handlePageSwitch(false)}
                        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                      >
                        New to Flipkart? Create an account
                      </p>
                    </div>
                  </section>
                </div>
              ) : (
                <div className="col-7 pt-0 mt-3">
                  <section className="text-dark py-5 pt-3 p-2 px-3">
                    <div className="mb-3">
                      <label
                        htmlFor="first_Name"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        className={`form-control border-0 border-bottom ${validationErrors.firstName ? 'border-danger' : 'border-primary'} p-0`}
                        id="first_Name"
                        name="firstName"
                        value={signUp.firstName}
                        aria-describedby="firstName"
                        onChange={(event) => SignupInputData(event)}
                        disabled={loading}
                        placeholder="Enter your first name"
                      />
                      {validationErrors.firstName && (
                        <small className="text-danger">{validationErrors.firstName}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Last_Name"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className={`form-control border-0 border-bottom ${validationErrors.lastName ? 'border-danger' : 'border-primary'} p-0`}
                        id="Last_Name"
                        name="lastName"
                        value={signUp.lastName}
                        onChange={(event) => SignupInputData(event)}
                        disabled={loading}
                        placeholder="Enter your last name"
                      />
                      {validationErrors.lastName && (
                        <small className="text-danger">{validationErrors.lastName}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="User_Name"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        Username *
                      </label>
                      <input
                        type="text"
                        className={`form-control border-0 border-bottom ${validationErrors.userName ? 'border-danger' : 'border-primary'} p-0`}
                        id="User_Name"
                        name="userName"
                        value={signUp.userName}
                        onChange={(event) => SignupInputData(event)}
                        disabled={loading}
                        placeholder="Choose a unique username"
                      />
                      {validationErrors.userName && (
                        <small className="text-danger">{validationErrors.userName}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Email"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className={`form-control border-0 border-bottom ${validationErrors.email ? 'border-danger' : 'border-primary'} p-0`}
                        id="Email"
                        name="email"
                        value={signUp.email}
                        onChange={(event) => SignupInputData(event)}
                        disabled={loading}
                        placeholder="Enter your email address"
                      />
                      {validationErrors.email && (
                        <small className="text-danger">{validationErrors.email}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Password"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        Password *
                      </label>
                      <input
                        type="password"
                        className={`form-control border-0 border-bottom ${validationErrors.password ? 'border-danger' : 'border-primary'} p-0`}
                        id="Password"
                        name="password"
                        value={signUp.password}
                        onChange={(event) => SignupInputData(event)}
                        disabled={loading}
                        placeholder="Create a strong password (min 6 characters)"
                      />
                      {validationErrors.password && (
                        <small className="text-danger">{validationErrors.password}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Phone"
                        className="form-label mb-0 p-0 small text-muted"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        className={`form-control border-0 border-bottom ${validationErrors.phoneNumber ? 'border-danger' : 'border-primary'} p-0`}
                        id="Phone"
                        name="phoneNumber"
                        value={signUp.phoneNumber}
                        onChange={(event) => SignupInputData(event)}
                        disabled={loading}
                        placeholder="Enter 10-digit phone number"
                        maxLength="10"
                      />
                      {validationErrors.phoneNumber && (
                        <small className="text-danger">{validationErrors.phoneNumber}</small>
                      )}
                    </div>
                    <button
                      className="btn form-login fw-bold shadow col-12 py-2 login-Button"
                      onClick={() => userSignUpData()}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Creating Account...
                        </>
                      ) : (
                        "Continue"
                      )}
                    </button>
                    <button
                      className="btn text-primary mt-3 border Existing-User col-12 py-2"
                      onClick={() => handlePageSwitch(true)}
                      disabled={loading}
                    >
                      Existing User? Login
                    </button>
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
