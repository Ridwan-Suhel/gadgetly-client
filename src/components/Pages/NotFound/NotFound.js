import React from "react";
import notFoundImg from "../../../images/browser.png";
const NotFound = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row justify-content-center my-5">
        <div className="col-md-7 text-center">
          <img
            style={{ width: "70px" }}
            className="img-fluid"
            src={notFoundImg}
            alt="img"
          />
          <p className="display-6 mt-3">Oops! page not found.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
