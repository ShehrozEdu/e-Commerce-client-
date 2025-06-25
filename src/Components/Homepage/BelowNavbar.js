import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../../resources/constants";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";

export default function BelowNavbar() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (item.path) {
      // If there's a path, let the Link component handle navigation
      return;
    } else {
      // If no path, show the coming soon dialog
      setSelectedItem(item);
      setOpenDialog(true);
    }
  };

  return (
    <>
      <div className="mx-lg-1 mx-0 p-1 pb-0 below-navbar-main">
        <div className="below-navbar-img d-flex justify-content-evenly m-0 bg-light shadow">
          {navData.map((item, index) => (
            item.path ? (
              <Link 
                to={item.path} 
                key={index}
                className="d-flex flex-column text-center align-items-center item text-decoration-none"
              >
                <img src={item.url} alt={item.text} className="ms-3" />
                <p className="belowNavP-text text-dark">{item.text}</p>
              </Link>
            ) : (
              <div
                className="d-flex flex-column text-center align-items-center item cursor-pointer"
                key={index}
                onClick={() => handleItemClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.url} alt={item.text} className="ms-3" />
                <p className="belowNavP-text">{item.text}</p>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="text-center">
          {selectedItem?.title}
        </DialogTitle>
        <DialogContent>
          <p className="text-center text-muted mb-4">
            {selectedItem?.message}
          </p>
        </DialogContent>
        <DialogActions className="justify-content-center pb-3">
          <Button 
            onClick={() => setOpenDialog(false)}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
