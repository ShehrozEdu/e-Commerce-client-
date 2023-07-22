import React from "react";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { navData } from "../../resources/constants";

export default function BelowNavbar() {
  return (
    <>
<div className="mx-lg-1 mx-0 p-1 pb-0 below-navbar-main">
  <div className="below-navbar-img d-flex justify-content-evenly m-0 bg-light shadow">
    {navData.map((data, index) => (
      <div className="d-flex flex-column text-center align-items-center item" key={index}>
        <img src={data.url} alt="product" className="ms-3" />
        <p className="belowNavP-text">{data.text}</p>
        <p className="title-hidden">{data.title}</p> {/* Add this line for title */}
      </div>
    ))}
  </div>
</div>
    </>
  );
}
