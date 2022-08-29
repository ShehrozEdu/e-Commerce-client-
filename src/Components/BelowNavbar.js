import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function BelowNavbar() {
  return (
    <>
      <div className=" mx-1 pt-2">
        <div className="below-navbar-img d-flex justify-content-evenly col-12 m-0  bg-light shadow ">
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt=""
            />
            <p className="ms-3 belowNavP-text">Top Offer</p>
          </div>

          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt=""
            />
            <p className="ms-3 belowNavP-text">Grocery</p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
            />
            <p className="ms-3 belowNavP-text">Mobiles</p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
              alt=""
            />
            <p className="ms-3 belowNavP-text">
              Fashion
              <KeyboardArrowDownOutlinedIcon />
            </p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt=""
            />
            <p className=" belowNavP-text">
              Electronics
              <KeyboardArrowDownOutlinedIcon />
            </p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
            />
            <p className="ms-4 belowNavP-text">
              Home <KeyboardArrowDownOutlinedIcon />
            </p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              alt=""
            />
            <p className="ms-3 belowNavP-text">Appliances</p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              alt=""
            />
            <p className="ms-4 belowNavP-text">Travel</p>
          </div>
          <div className="col-1 ms-4 d-flex flex-column">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
            />
            <p className="ms-2 belowNavP-text">Toys & more </p>
          </div>
        </div>
      </div>
    </>
  );
}
