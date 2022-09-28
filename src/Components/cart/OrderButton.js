import React from "react";
import StripeCheckout from "react-stripe-checkout";
export default function OrderButton({ totalPrice }) {
  let onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 bottom-0 bg-light py-3  d-flex justify-content-end align-items-center order-btn">
        <StripeCheckout
          token={onToken}
          amount={totalPrice * 100}
          currency="INR"
          stripeKey="pk_test_51Llp75SEC2o5dnLQEGLRJ9zW23jfK2ibBWWgbfu3NpySx7zXhKzHvc2vnK19cP2q17PdApp9dMEMaJKRHLkerPvA00fjfYj904"
        >
          <button
            type="button"
            className=" btn  place-order text-white fw-bold"
          >
            PLACE ORDER
          </button>
        </StripeCheckout>
      </div>
    </>
  );
}
