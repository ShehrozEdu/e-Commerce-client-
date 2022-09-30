import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
export default function OrderButton({ totalPrice }) {
  //Payment
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

    let URL = "http://localhost:7000/api/payment";

    let sendData = {
      amount: totalPrice,
    };

    let { data } = await axios.post(URL, sendData);
    let { order } = data;
    // console.log(data);
    var options = {
      key: process.env.REACT_APP_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Zomato Clone Payment",
      description: "Food Payment",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
      order_id: order.id,
      handler: async function (response) {
        let URL = "http://localhost:7000/api/callback";
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
      <div className="col-lg-8 col-md-12 col-sm-12 bottom-0 bg-light position-fixed py-3  d-flex justify-content-end align-items-center order-btn">
        <button
          type="button"
          className=" btn  place-order text-white fw-bold"
          onClick={makePayment}
        >
          PLACE ORDER
        </button>
      </div>
    </>
  );
}
