import React from "react";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { navData } from "../resources/constants";

export default function BelowNavbar() {
  return (
    <>
      <div className=" mx-1 pt-2">
        <div className="below-navbar-img d-flex justify-content-evenly col-12 m-0  bg-light shadow ">
          {navData.map((data) => (
            <div className="col-1 ms-4 d-flex flex-column">
              <img src={data.url} alt="product" />
              <p className="ms-2 belowNavP-text">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
