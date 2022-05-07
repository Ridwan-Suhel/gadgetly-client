import React from "react";
import "./SocialLogin.css";
import ggl from "../../../images/ggl.png";
const SocialLogin = () => {
  return (
    <div>
      <div className="or">OR</div>
      <div className="social-btn d-flex justify-content-center my-3">
        <button className="google-btn btn btn-dark px-5 d-flex justify-content-center align-items-center">
          <img src={ggl} alt="ggl" />
          <span>Continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
