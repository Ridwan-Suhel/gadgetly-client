import React from "react";
import MoreContent from "../../Shared/MoreContent/MoreContent";
import Products from "../../Shared/Products/Products";
import Banner from "./Banner/Banner";
import Newsletter from "./Newsletter/Newsletter";
import WearhouseOffer from "./WearhouseOffer/WearhouseOffer";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Products></Products>
      <WearhouseOffer></WearhouseOffer>
      <Newsletter></Newsletter>
      <section className="more-content">
        <MoreContent></MoreContent>
      </section>
    </main>
  );
};

export default Home;
