import React from 'react'

export default function OrderButton() {
  return (
    <>
       <div className="col-lg-8 col-md-12 col-sm-12 bottom-0 bg-light py-3  d-flex justify-content-end align-items-center order-btn">
              <button
                type="button"
                className=" btn  place-order text-white fw-bold"
              >
                PLACE ORDER
              </button>
            </div>
    </>
  )
}
