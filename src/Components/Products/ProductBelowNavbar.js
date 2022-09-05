import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export default function ProductBelowNavbar() {
  return (
    <>
      <div className="shadow ">
        <div className="d-lg-flex below-navbar d-md-none d-sm-none d-xs-none text-center mx-5 justify-content-around bg-light py-2  mb-2 hover-blue">
          <div className="small">
            Electronics <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">
            TV Appliances
            <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">
            Men <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">
            Woman <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">
            Baby and kids
            <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">
            Home and Furniture
            <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">
            Sports , Books and more
            <KeyboardArrowDownOutlinedIcon className="text-muted" />
          </div>
          <div className="small">Flights</div>
          <div className="small"> Offer Zone</div>
        </div>
      </div>
    </>
  );
}
