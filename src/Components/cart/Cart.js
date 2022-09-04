import React from 'react'

import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import TotalView from './TotalView'

export default function Cart() {
    const { cartItems } = useSelector(state => state.cart)
    return (
        <>
            {
                cartItems ?


                    <div className="container cart-section mt-3">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12 ">
                                <div className="cart-header  d-flex  fw-bold ">
                                    <div className="col-6 text-center  cart-border ">
                                        <p className='py-3 '>Flipkart ({cartItems.length})</p>

                                    </div>
                                    <div className="col-6   text-center ">
                                        <p className='py-3 c'>Grocery</p>
                                    </div>
                                </div>
                                <div className="cart-header mt-4 d-flex justify-content-between align-items-center bg-white">
                                    <p className='m-2 fw-normal'>From Saved Addresses</p>
                                    <button className='border border-primary p-2 fs-6 m-2 bg-white text-primary fw-normal'> Enter Delivery Pincode</button>
                                </div>
                            </div>
                            {/* left-cart */}
                            {
                                cartItems.map(item => (
                                    <CartItem  item ={ item }/>
                                )) 
                            }
                            
                            {/* right  */}

                            <TotalView cartItems = { cartItems}/>
                        </div>
                    </div>
                    : <div  >
                      EMpty
                    </div>
            }
        </>
    )
}
 