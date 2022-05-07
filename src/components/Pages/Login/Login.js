import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
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
                Don't have an account <Link to="/signup">Please Register</Link>
              </p>

              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
