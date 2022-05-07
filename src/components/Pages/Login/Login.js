import React, { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  let errMsg = error;

  if (error) {
    errMsg = "✖ Email or password Incorrect";
  }

  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const inEmail = e.target.value;
    setEmail(inEmail);
    console.log(inEmail);
  };
  // const emailRef = useRef();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleReset = async () => {
    await sendPasswordResetEmail(email);
    toast("email sent");
  };

  return (
    <section className="authentication">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-7">
            <div className="form-wrapper border p-4 bg-light rounded">
              <p className="lead">Please Log in</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="form-control mb-3"
                  placeholder="Write Your Email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="form-control mb-3"
                  placeholder="Write your password"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-dark px-5"
                />
              </form>

              <p className="lead my-3">
                Forget Password?{" "}
                <button onClick={handleReset} className="btn btn-link">
                  Reset Password
                </button>
              </p>

              <p className="lead text-danger">{errMsg}</p>

              <SocialLogin></SocialLogin>

              <p className="lead my-3">
                Don't have an account? <Link to="/signup">Please Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
