import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-tor-80045.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  return (
    <section className="inventory-products py-5">
      <div className="container">
        <h2 className="display-6 mb-5">Inventory Items</h2>
        <div className="products wrapper">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
