import React from 'react'

export default function ButtonPagination() {
    return (
        <>
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

        </>
    )
}