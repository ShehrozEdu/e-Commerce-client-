import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductSkeleton() {
  return (
    <>
      <section className="row d-flex justify-content-end container-fluid ">
        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 p-5 pt-2 d-flex flex-column align-items-center  h-75 test-fixed ">
          <div>
            <Skeleton height={300} width={300} />
          </div>
          <div></div>
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12   ms-3 product-right">
          <div className="mt-2">
            <div>
              <Skeleton height={30} width={500} />
            </div>
            <div className="small text-muted d-flex m-0 p-0 mt-4">
              <Skeleton height={30} width={100} />
              <span></span>
            </div>

            <div className="mt-2">
              <Skeleton height={30} width={200} />
              <div className="mt-1">
                <Skeleton height={20} width={600} count={4} />
              </div>
            </div>

            {/* descriptions */}

            <div className="col-12 d-flex mt-5 small">
              <div className="col-1">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width={400} />
              </div>
              <div className="col-10 ">
                <Skeleton width={400} />

                {/* <p className="ms-5 "> {product.warranty}</p> */}

                <Skeleton width={400} />
                <Skeleton width={400} />
                <Skeleton width={400} />

                {/* <p className="ms-5 ">{product.description}</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
