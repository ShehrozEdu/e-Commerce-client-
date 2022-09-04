import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export default function ProductBelowNavbar() {
  return (
    <>
      <div className="d-flex text-center justify-content-around bg-light py-2 shadow mb-2">
        <div className="small">
          Electronics <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          TV Appliances <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          Men <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          Woman <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          Baby and kids <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          Home and Furniture <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          Sports , Books and more <KeyboardArrowDownOutlinedIcon />{" "}
        </div>
        <div className="small">
          Flights <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="small">
          {" "}
          Offer Zone <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </>
  );
}
