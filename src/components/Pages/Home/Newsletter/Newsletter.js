import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container py-5">
        <p className="display-6 text-center">Let's keep in touch!</p>
        <p className="lead text-center">
          Subscribe to our weekly newsletter and receive{" "}
          <br className="d-none d-lg-block" /> exclusive offers on products you
          love!
        </p>

        <div className="newsletter-area">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form action="">
                <div className="row gx-0">
                  <div className="col-md-9">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-0"
                      placeholder="Write email"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="submit"
                      value="Subscribe"
                      className="btn btn-dark d-block w-100 rounded-0"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
