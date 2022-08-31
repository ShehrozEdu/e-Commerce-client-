
import React from 'react'


export default function Cart() {
    return (
        <>
            <div className="container cart-section mt-3">
                <div className="row">
                    {/* left-cart */}
                    <div className="col-lg-8 col-sm-12 ">
                        <div className="cart-header  d-flex  fw-bold ">
                            <div className="col-6 text-center  cart-border ">
                                <p className='py-3 '>Flipkart (1)</p>

                            </div>
                            <div className="col-6   text-center ">
                                <p className='py-3 c'>Grocery</p>
                            </div>
                        </div>
                        <div className="cart-header mt-4 d-flex justify-content-between align-items-center bg-white">
                            <p className='m-2 fw-normal'>From Saved Addresses</p>
                            <button className='border border-primary p-2 fs-6 m-2 bg-white text-primary fw-normal'> Enter Delivery Pincode</button>
                        </div>

                        <div className="cart-product row">
                            <div className="col-lg-2 col-sm-6 text-sm-center ">
                                <img className='product-img m-2' src="https://rukminim1.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70" alt="" />
                            </div>
                            <div className="col-lg-6 col-sm-6  text-sm-center ">
                                <div>
                                    <p className='fs-5 '>APPLE iPhone 13 (Startlight,128 GB)</p>
                                    <p className='fs-6 fw-lighter '>Seller:NGIVR RETAILS <span><img className='assured' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /></span> </p>
                                </div>
                                <p className='fs-6 m-2'> <span className='text-decoration-line-through'> ₹79,900</span> <span className='fs-5 fw-bold'>₹65,999</span> <span className="text-success fw-bold">17% Off 2 offers applied</span> </p>
                            </div>
                            <div className="col-lg-4 col-sm-12   text-sm-start">
                                <p className='fw-bold'>Delivery by Sat Sep 3 | <span className='text-success'>Free </span> <span className='text-decoration-line-through'> ₹40</span></p>
                            </div>
                            <div className="cart-pagination d-flex justify-content-start col-12 my-5">
                                <ul className="pagination pagination-sm mx-2">
                                    <li className="page-item " aria-current="page">
                                        <a className="page-link  rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg></a>
                                    </li>
                                    <li className="page-item "><a className="page-link px-3 mx-2" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link  rounded-circle" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg></a></li>
                                </ul>

                                <div className='mx-2 '><a href="#" className='text-dark fw-bold m-1'> SAVE FOR LATER</a></div>
                                <div className='mx-2'><a href="#" className='text-dark fw-bold'> Remove</a></div>

                            </div>
                            <div className="col-lg-12  col-sm-12 d-flex justify-content-end align-items-center order-btn">
                                <button type="button" className=" btn place-order text-white fw-bold">PLACE ORDER</button>
                            </div>
                        </div>

                    </div>
                    {/* right  */}

                    <div className="col-lg-3 col-sm-12  price-detail  mx-3 mt-sm-1 mt-xs-4">

                        <div className=" col-12 py-2  price-head">
                            <p className='fw-lighter   mx-1 fs-6'>PRICE DETAILS</p>

                        </div>

                        <div className="price-section row">
                            <div className="col-8 fw-bolder py-2">
                                <p>Price ( 1 item )</p>
                            </div>
                            <div className="col-4  py-2">
                                <p>₹79,900</p>
                            </div>

                            <div className="col-8 fw-bolder py-2">
                                <p>Discount</p>
                            </div>
                            <div className="col-4 py-2">
                                <p className='text-success'>− ₹13,901</p>
                            </div>

                            <div className="col-8 fw-bolder py-2">
                                <p>Delivery Charges</p>
                            </div>
                            <div className="col-4 py-2">
                                <p className='text-success'>FREE</p>
                            </div>

                            <div className="col-8 fw-bolder py-2">
                                <p>Secured Packaging Fee</p>
                            </div>
                            <div className="col-4  py-2">
                                <p>₹29</p>
                            </div>

                        </div>

                        <div className="row pt-3 total-amount">
                            <div className="col-8 fw-bold fs-5">
                                <p>Total Amount</p>
                            </div>
                            <div className="col-4 fw-bold fs-5">
                                <p>₹66,028</p>
                            </div>
                           
                        </div>
                        <div className="col-12 text-success py-3 fw-bolder">
                                <p>You will save ₹13,872 on this order</p>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
