import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import { addToCart } from "../../Redux/Actions/ElectronicsCartAction.js";

export default function ElectronicCartButtons({ electronics }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const dispatch = useDispatch();
  const { _id } = electronics;

  const addItemToCart = () => {
    try {
      setLoading(true);
      dispatch(addToCart(_id, quantity));
      
      // Success toast
      toast.success(`🛒 ${electronics.shortTitle || electronics.title} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Small delay before navigation for better UX
      setTimeout(() => {
        navigate("/cart");
      }, 500);
      
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart. Please try again.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  let loadScript = async () => {
    return new Promise((resolve) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://checkout.razorpay.com/v1/checkout.js";
      scriptElement.onload = () => resolve(true);
      scriptElement.onerror = () => resolve(false);
      document.body.appendChild(scriptElement);
    });
  };

  let makePayment = async () => {
    if (paymentLoading) return;
    
    setPaymentLoading(true);
    
    try {
      // Loading toast
      const loadingToast = toast.info("🔄 Preparing payment gateway...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });

      let isLoaded = await loadScript();
      if (isLoaded === false) {
        toast.dismiss(loadingToast);
        toast.error("❌ Unable to load payment gateway. Please try again.", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return false;
      }

      let URL = "http://localhost:7000/api/payment";

      let sendData = {
        amount: electronics.cost,
      };

      let { data } = await axios.post(URL, sendData);
      let { order } = data;

      toast.dismiss(loadingToast);
      toast.success("💳 Payment gateway loaded successfully!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      var options = {
        key: process.env.REACT_APP_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Flipkart Electronics Purchase",
        description: `Payment for ${electronics.shortTitle || electronics.title}`,
        image:
          "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
        order_id: order.id,
        handler: async function (response) {
          try {
            let URL = "http://localhost:7000/api/callback";
            let sendData = {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            };

            let { data } = await axios.post(URL, sendData);
            if (data.status === true) {
              toast.success("🎉 Payment successful! Redirecting to home...", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });

              Swal.fire({
                position: "center",
                icon: "success",
                title: "Order Successful!",
                text: "Thank you for your purchase. Your electronics order has been confirmed.",
                showConfirmButton: false,
                timer: 3000,
              }).then(() => window.location.assign("/"));
            } else {
              toast.error("❌ Payment verification failed. Please contact support.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error("❌ Payment verification failed. Please contact support.", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        },
        modal: {
          ondismiss: function() {
            toast.info("💭 Payment cancelled. You can try again anytime.", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        },
        prefill: {
          name: "Customer",
          email: "customer@flipkart.com",
          contact: "9999999999",
        },
        theme: {
          color: "#2874f0"
        }
      };
      
      var paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error("❌ Failed to initialize payment. Please try again.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn py-3 px-2 font-product-btn cart-btn"
          onClick={() => addItemToCart()}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Adding...
            </>
          ) : (
            <>
              <i className="fa-solid fa-cart-shopping me-2"></i>ADD TO CART
            </>
          )}
        </button>
        <button
          className="btn text-light ms-5 px-3 font-product-btn bolt-btn"
          onClick={makePayment}
          disabled={paymentLoading}
        >
          {paymentLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Loading...
            </>
          ) : (
            <>
              <i className="fa-solid fa-bolt me-2"></i>BUY NOW
            </>
          )}
        </button>
      </div>
    </>
  );
}
