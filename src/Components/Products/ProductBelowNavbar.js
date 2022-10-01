import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export default function ProductBelowNavbar() {
  return (
    <>
      <div className="shadow ">
        <div className="d-lg-flex below-navbar d-md-none d-sm-none d-xs-none text-center mx-5 justify-content-around bg-light py-2  mb-2 hover-blue">
          <div className="small icon-main">
            Electronics{" "}
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">
            TV Appliances
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">
            Men{" "}
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">
            Woman{" "}
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">
            Baby and kids
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">
            Home and Furniture
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">
            Sports , Books and more
            <KeyboardArrowDownOutlinedIcon className="text-muted iconDown" />
          </div>
          <div className="small icon-main">Flights</div>
          <div className="small icon-main"> Offer Zone</div>
        </div>
      </div>
    </>
  );
}
