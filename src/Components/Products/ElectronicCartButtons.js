import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { addToCart } from "../../Redux/Actions/ElectronicsCartAction.js";
export default function CartButtons({ electronics }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { _id } = electronics;

  const addItemToCart = () => {
    dispatch(addToCart(_id, quantity));
    navigate("/cart");
  };
  let loadScript = async () => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://checkout.razorpay.com/v1/checkout.js";
    scriptElement.onload = () => {
      return true;
    };
    scriptElement.onerror = () => {
      return false;
    };
    document.body.appendChild(scriptElement);
  };

  let makePayment = async () => {
    let isLoaded = await loadScript();
    if (isLoaded === false) {
      alert("Unable load payment sdk");
      return false;
    }

    let URL = "https://e-commerce-server-pied.vercel.app/api/payment";

    let sendData = {
      amount: electronics.cost,
    };

    let { data } = await axios.post(URL, sendData);
    let { order } = data;

    // console.log(data);
    var options = {
      key: process.env.REACT_APP_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Product Payment Confirmation",
      description: "Payment for the Product",
      image:
        "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      order_id: order.id,
      handler: async function (response) {
        let URL = "https://e-commerce-server-pied.vercel.app/api/callback";
        let sendData = {
          payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        let { data } = await axios.post(URL, sendData);
        if (data.status === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Successful!",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => window.location.assign("/"));
        } else {
          alert("payment files, try again.");
        }
      },
      prefill: {
        name: "Shehroz",
        email: "shehrozk@gmail.com",
        contact: "9999999999",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn  py-3 px-2 font-product-btn cart-btn"
          onClick={() => addItemToCart()}
        >
          <i class="fa-solid fa-cart-shopping me-2"></i>ADD TO CART
        </button>
        <button
          className="btn text-light ms-5 px-3 font-product-btn bolt-btn"
          onClick={makePayment}
        >
          <i class="fa-solid fa-bolt me-2"></i>BUY NOW
        </button>
      </div>
    </>
  );
}
