import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="authentication">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-7">
            <p className="lead">Please Signup</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="name"
                {...register("name", { required: true })}
                className="form-control mb-3"
                placeholder="Write Your Name"
              />
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
              Already have an account? <Link to="/login">Please Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
