import { style } from '@mui/system';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {bannerData} from './content/data'



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Banner() {
 
  return (
    <>
    <Carousel responsive ={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay ={true}
      autoPlaySpeed={3000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      >

{
  bannerData.map(data=>(
    <img className='banner-img' src={data.url} alt="baner"/>
  ))
}

    </Carousel>
    </>
  )
}
