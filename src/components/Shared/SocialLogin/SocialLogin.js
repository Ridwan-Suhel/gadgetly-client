import React from "react";
import "./SocialLogin.css";
import ggl from "../../../images/ggl.png";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const SocialLogin = () => {
  const [socialUser] = useAuthState(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // console.log(email);
  // let errorElement = error?.message;
  // if (error) {
  //   toast(errorElement);
  // }
  const email = socialUser?.email;
  const handleSocial = () => {
    signInWithGoogle();
  };
  if (user) {
    navigate(from, { replace: true });
    const handleFetch = async () => {
      const { data } = await axios.post("http://localhost:5000/login", {
        email,
      });
      console.log(email, "token", data);
      localStorage.setItem("accessToken", data.accessToken);
    };
    handleFetch();
  }

  return (
    <div>
      <div className="or">OR</div>
      <div className="social-btn d-flex justify-content-center my-3">
        <button
          // onClick={() => signInWithGoogle()}
          onClick={handleSocial}
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
