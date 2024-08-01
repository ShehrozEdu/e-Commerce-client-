import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../content/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Banner() {
  return (
    <>
      <div className="mx-3 mt-4">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          className=" z-index"
        >
          {bannerData.map((data, index) => (
            <img
              className="banner-img "
              src={data.url}
              alt="baner"
              key={index}
            />
          ))}
        </Carousel>
        <div className=" banner-below d-lg-flex d-md-flex d-none justify-content-center align-items-center">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/2666/230/image/87da51544bff6617.jpg?q=50"
            className="banner-img-1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
