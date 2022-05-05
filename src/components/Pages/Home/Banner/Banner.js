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
          <div className="col-md-8 banner-main mt-3">
            <img className="img-fluid" src={banner1} alt="banner main img" />
          </div>
          <div className="col-md-4 right-boxes-wrapper">
            <div className="row">
              <div className="col-12 banner-right-1 mt-3">
                <img
                  src={bannerRight}
                  alt="banner right img 1"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 banner-right-2 mt-3">
                <img
                  src={bannerRight2}
                  alt="banner right img 2"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
