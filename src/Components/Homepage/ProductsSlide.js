import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const ProductsSlide = ({ products, title, time }) => {
  const navigate = useNavigate();

  // Get the correct route based on title
  const getViewAllRoute = () => {
    switch (title.toLowerCase()) {
      case "best in fashion":
        return "/products/category/fashion";
      case "deal of the day":
        return "/products/deals";
      case "featured products":
        return "/products/featured";
      default:
        return "/products/deals";
    }
  };

  const handleViewAll = () => {
    navigate(getViewAllRoute());
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {time && (
          <Timer>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="time clock"
              style={{ width: 24 }}
            />
            <span style={{ marginLeft: 10 }}>Limited Time Offer!</span>
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary" onClick={handleViewAll}>
          View All
        </ViewAllButton>
      </Deal>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product, index) => (
          <Link 
            to={`/product-overview/${product._id}`} 
            style={{ textDecoration: "none" }} 
            key={product._id || index}
          >
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt={product.title?.shortTitle || product.shortTitle} />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title?.shortTitle || product.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>
                {product.price?.discount || product.discount}
              </Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
              {/* Show price */}
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                ₹{(product.price?.cost || product.cost).toLocaleString()}
                {(product.price?.mrp || product.mrp) && (product.price?.mrp || product.mrp) > (product.price?.cost || product.cost) && (
                  <span style={{ textDecoration: 'line-through', color: '#7f7f7f', marginLeft: 8, fontSize: '12px' }}>
                    ₹{(product.price?.mrp || product.mrp).toLocaleString()}
                  </span>
                )}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default ProductsSlide;
