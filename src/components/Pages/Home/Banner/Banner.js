import React from "react";
import "./Banner.css";
import banner1 from "../../../../images/banner.webp";
import bannerRight from "../../../../images/banner-right-1.webp";
import bannerRight2 from "../../../../images/banner-right-2.webp";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 banner-main mt-3">
            <div className="hover-block"></div>
            <div className="img-wrapper">
              <img className="img-fluid" src={banner1} alt="banner main img" />
            </div>
            <div className="banner-content">
              <p className="lead mb-0">Top notch gadgets</p>
              <h2 className="tag-line">
                Gadgetly the ultimate choice{" "}
                <br className="d-none d-lg-block" /> of all time
              </h2>
              <button className="btn btn-dark px-4">See best selling</button>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="row right-boxes-wrapper">
              <div className="col-lg-12 banner-right-1 mt-3">
                <div className="banner-right-content">
                  <h2 className="">
                    Techy <br className="d-none d-lg-block" /> Gadgets
                  </h2>
                  <button className="btn btn-outline-dark py-1 rounded-0 mt-2">
                    All Products
                  </button>
                </div>
                <img
                  src={bannerRight}
                  alt="banner right img 1"
                  className="img-fluid"
                />
                <div className="hover-block"></div>
              </div>
              <div className="col-lg-12 banner-right-2 mt-3">
                <div className="banner-right-content">
                  <h2 className="">
                    Best <br className="d-none d-lg-block" /> Selling
                  </h2>
                  <button className="btn btn-outline-dark py-1 rounded-0 mt-2">
                    See Products
                  </button>
                </div>
                <img
                  src={bannerRight2}
                  alt="banner right img 2"
                  className="img-fluid"
                />
                <div className="hover-block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
