import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsByCategory, getDealProducts, getFeaturedProducts } from "../../Redux/Actions/ProductAction";
import ProductBelowNavbar from "./ProductBelowNavbar";

export default function ProductViewAll() {
  const { category } = useParams(); // Get category from URL params
  const dispatch = useDispatch();
  
  // Get different product sets from Redux
  const { products } = useSelector((state) => state.getProduct);
  const { products: categoryProducts, loading: categoryLoading } = useSelector((state) => state.getProductsByCategory || { products: [], loading: false });
  const { products: dealProducts, loading: dealLoading } = useSelector((state) => state.getDealProducts || { products: [], loading: false });
  const { products: featuredProducts, loading: featuredLoading } = useSelector((state) => state.getFeaturedProducts || { products: [], loading: false });

  // Determine which products to show and the section title
  const getSectionInfo = () => {
    switch (category) {
      case 'fashion':
        return {
          title: 'Best in Fashion',
          subtitle: 'Trending styles & fashion',
          products: categoryProducts,
          loading: categoryLoading
        };
      case 'deals':
        return {
          title: 'Deal of the Day',
          subtitle: 'Limited time offers',
          products: dealProducts,
          loading: dealLoading
        };
      case 'featured':
        return {
          title: 'Featured Products',
          subtitle: 'Best products for you',
          products: featuredProducts,
          loading: featuredLoading
        };
      default:
        return {
          title: 'Deal of the Day',
          subtitle: 'Limited time offers',
          products: products,
          loading: false
        };
    }
  };

  const sectionInfo = getSectionInfo();

  useEffect(() => {
    // Always fetch appropriate products based on category when component mounts or category changes
    if (category === 'fashion') {
      dispatch(getProductsByCategory('fashion', 50)); // Get up to 50 fashion products
    } else if (category === 'deals') {
      dispatch(getDealProducts(50)); // Get up to 50 deal products
    } else if (category === 'featured') {
      dispatch(getFeaturedProducts(50)); // Get up to 50 featured products
    }
    // For default case (no category), products are already loaded in the homepage
  }, [category, dispatch]);

  // Determine which products to display
  const displayProducts = sectionInfo.products && sectionInfo.products.length > 0 
    ? sectionInfo.products 
    : products; // Fallback to default products

  // Show loading state
  if (sectionInfo.loading) {
    return (
      <>
        <ProductBelowNavbar />
        <section className="my-1 mx-1 bg-light">
          <div className="d-flex justify-content-center py-5">
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading {sectionInfo.title.toLowerCase()}...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <ProductBelowNavbar />
      <section className="my-1 mx-1 bg-light">
        <div>
          <div className="d-flex justify-content-center border-bottom border-muted">
            <div className="d-flex flex-column align-items-center p-4 ">
              <h4 className="fw-bold">{sectionInfo.title}</h4>
              <p className="text-muted">{sectionInfo.subtitle}</p>
              <p className="text-muted">Items {displayProducts.length}</p>
              {category && (
                <span className="badge bg-primary text-capitalize">{category} Collection</span>
              )}
            </div>
          </div>
          <section className="bg-light">
            <div className="d-flex justify-content-center w-100">
              <div className="product-list col-12  d-flex  w-100 flex-wrap ">
                {displayProducts.map((item, index) => {
                  return (
                    <div
                      className="align-items-center d-flex flex-column w-25 mt-5 viewAllProducts"
                      key={item._id || index}
                    >
                      <Link to={`/product-overview/${item._id}`}>
                        <img 
                          src={item.url} 
                          alt={item.title?.shortTitle || item.shortTitle || "Product"} 
                          className="product-image"
                          style={{ maxHeight: '200px', objectFit: 'contain' }}
                        />
                      </Link>
                      <strong className="mb-0 mt-4 text-center">
                        {item.title?.shortTitle || item.shortTitle || "Product"}
                      </strong>
                      <p className="text-success m-0 mt-1 small">
                        {item.price?.discount || item.discount || "0% off"}
                      </p>
                      <p className="text-muted mt-1 small text-center">{item.tagline}</p>
                      {/* Show additional info for categorized products */}
                      {item.brand && (
                        <p className="text-muted mt-1 small">Brand: {item.brand}</p>
                      )}
                      {/* Show price */}
                      {(item.price?.cost || item.cost) && (
                        <p className="fw-bold text-dark mt-1">
                          ₹{(item.price?.cost || item.cost).toLocaleString()}
                          {(item.price?.mrp || item.mrp) && (item.price?.mrp || item.mrp) > (item.price?.cost || item.cost) && (
                            <span className="text-muted text-decoration-line-through ms-2 small">
                              ₹{(item.price?.mrp || item.mrp).toLocaleString()}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Show message if no products found */}
            {displayProducts.length === 0 && !sectionInfo.loading && (
              <div className="text-center py-5">
                <h5 className="text-muted">No products found in this category</h5>
                <p className="text-muted">Try browsing other categories or check back later</p>
                <Link to="/" className="btn btn-primary mt-3">
                  Back to Homepage
                </Link>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
