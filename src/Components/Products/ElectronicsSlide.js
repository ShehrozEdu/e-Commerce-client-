import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
// import Countdown from "react-countdown";
export default function ElectronicsSlide({ electronics }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 510, min: 0 },
      items: 1,
    },
  };
  // const timer = ({ hours, minutes, seconds }) => {
  //   return (
  //     <span className="">
  //       {hours} : {minutes} : {seconds} Left
  //     </span>
  //   );
  // };
  return (
    <>
      <div className="mt-4 bg-light product-main-box shadow mx-2">
        <div className="ms-3 d-flex justify-content-between align-items-center ">
          <div className="mt-3 d-flex ">
            <div>
              <h5 className="best-of-font">Best in Electronics</h5>

              <h4 className="text-muted small">Best of products</h4>
            </div>
          </div>
          <Link to={"/electronics-list"}>
            <button className="btn btn-primary view-btn-width me-4 mt-1  d-lg-block d-md-block d-none  ">
              View All
            </button>
          </Link>
        </div>
        <hr className="ms-0" />
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          centerMode={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          containerClass="carousel-container"
        >
          {electronics.map((product) => {
            return (
              <Link to={`/electronics-overview/${product._id}`}>
                <div className="p-3 d-flex flex-column align-items-center ">
                  <div className="w-75 h-50">
                    <img
                      src={product.url}
                      className=" mt-0 productCarousel-img"
                      alt=""
                    />
                  </div>
                  <p className=" mt-3 text-center product-text p-0 m-0">
                    {product.shortTitle}
                  </p>
                  <p className=" product-text text-success mt-2 small p-0 m-0">
                    {product.discount}
                  </p>
                  <p className=" mt-2 text-center product-text  mt-2 text-muted small p-0 m-0">
                    {product.tagline}
                  </p>
                  {/* <p className=" ms-lg-2 ms-3 product-text">{product.discount}</p> */}
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
