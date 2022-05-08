import React from "react";
import "./SocialLogin.css";
import ggl from "../../../images/ggl.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // let errorElement = error?.message;
  // if (error) {
  //   toast(errorElement);
  // }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="or">OR</div>
      <div className="social-btn d-flex justify-content-center my-3">
        <button
          onClick={() => signInWithGoogle()}
          className="google-btn btn btn-dark px-5 d-flex justify-content-center align-items-center"
        >
          <img src={ggl} alt="ggl" />
          <span>Continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
