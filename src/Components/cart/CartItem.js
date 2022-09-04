import React from 'react'
import { useSelector } from 'react-redux'
import ButtonPagination from './ButtonPagination'


export default function CartItem({ item }) {
    // const { cartItems } = useSelector(state => state.cart )df
  return (
    <>
      <div className="col-lg-8 col-sm-12 ">
                        

                        <div className="cart-product row">
                            <div className="col-lg-2 col-sm-6 text-sm-center ">
                                <img className='product-img m-2' src={ item.url} alt="" />
                            </div>
                            <div className="col-lg-6 col-sm-6  text-sm-start ">
                                <div>
                                    <p className='fs-5 '>{item.title.shortTitle}</p>
                                    <p className='fs-6 fw-lighter '>Seller:NGIVR RETAILS <span><img className='assured' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /></span> </p>
                                </div>
                                <p className='fs-6 m-2'> <span className='text-decoration-line-through'>₹{item.price.mrp}</span> <span className='fs-5 fw-bold px-1'>₹{item.price.cost}</span> <span className="text-success fw-bold px-2">{item.price.discount} Off 2 offers applied</span> </p>
                            </div>
                            <div className="col-lg-4 col-sm-12   text-sm-start">
                                <p className='fw-bold'>Delivery by Sat Sep 3 | <span className='text-success'>Free </span> <span className='text-decoration-line-through'> ₹40</span></p>
                            </div>
               <ButtonPagination/>
                            <div className="col-lg-12  col-sm-12 d-flex justify-content-end align-items-center order-btn">
                                <button type="button" className=" btn place-order text-white fw-bold">PLACE ORDER</button>
                            </div>
                        </div>

                    </div>
    </>
  )
}
