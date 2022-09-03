import React from "react";
import Carousel from "react-multi-carousel";
import { dealData } from "../resources/constants";
import Countdown from "react-countdown";
export default function ProductsSlide({ time, title }) {
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
  const timer = ({ hours, minutes, seconds }) => {
    return (
      <span className="">
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <>
      <div className="mt-4 bg-light product-main-box shadow mx-3">
        <div className="ms-3 d-flex justify-content-between align-items-center ">
          <div className="mt-3 d-flex ">
            <div>
              <h5 className="best-of-font">{title}</h5>

              <h4 className="text-muted small">Best of electronics</h4>
            </div>
            {time && (
              <div className="ms-4">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/timer_a73398.svg"
                  style={{ width: 24 }}
                  className="clock"
                  alt="time clock"
                />
                <Countdown date={Date.now() + 5.04e7} timer={timer} />
              </div>
            )}
          </div>

          <button className="btn btn-primary view-btn-width me-4 mt-1  d-lg-block d-md-block d-none  ">
            View All
          </button>
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
          {dealData.map((product) => {
            return (
              <div className="p-3">
                <img
                  src={product.url}
                  className=" productCarousel-img "
                  alt=""
                />
                <p className=" mt-2 ms-lg-2 ms-3 product-text">
                  {product.discount}
                </p>
                <p className=" ms-lg-2 ms-3 product-text">{product.discount}</p>
                {/* <p className=" ms-lg-2 ms-3 product-text">{product.discount}</p> */}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
