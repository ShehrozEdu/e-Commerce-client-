import React from "react";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { navData } from "../resources/constants";

export default function BelowNavbar() {
  return (
    <>
      <div className=" mx-lg-1 mx-0 pt-2">
        <div className="below-navbar-img d-flex justify-content-evenly col-12 m-0  bg-light shadow  ">
          {navData.map((data) => (
            <div className="col-1  d-flex flex-column text-center ">
              <img src={data.url} alt="product" className="ms-3" />
              <p className=" belowNavP-text ">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
