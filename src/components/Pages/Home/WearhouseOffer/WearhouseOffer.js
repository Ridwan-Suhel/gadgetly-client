import React from "react";
import offer1 from "../../../../images/offer-1.webp";
import offer2 from "../../../../images/offer-2.webp";
const WearhouseOffer = () => {
  return (
    <div className="container py-5">
      <p className="display-6 py-4">This week offer from Gadgetly wearhouse</p>
      <div className="row">
        <div className="col-md-6">
          <div className="single-box border">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="offer-img">
                  <img src={offer1} className="img-fluid" alt="img" />
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="text-primary">
                  Exclusive offers on JBL products
                </h5>
                <p>
                  Great news for jbl product user. this week we arrange a big
                  exclusive offer for jbl product user.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-box border">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="offer-img">
                  <img src={offer2} className="img-fluid" alt="img" />
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="text-primary">
                  Free shipping for all orders overs $80
                </h5>
                <p>
                  We got you covered ! We deliver your goods using redex
                  expedited shipping, free of charge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WearhouseOffer;
