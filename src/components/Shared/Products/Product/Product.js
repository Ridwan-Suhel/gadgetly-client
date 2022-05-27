import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  // console.log(product);
  const { _id, image, name, supplier, quantity, price, description } = product;
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img className="img-fluid" src={image} alt="img" />
        <div className="card-body">
          <p className="text-secondary">{supplier}</p>
          <h5 className="card-title text-primary">Name: {name}</h5>
          <p className="lead">{description.slice(0, 55) + "..."}</p>
          <h4 className="">Price: ${price}</h4>
          <li className="lead text-success">Quantity: {quantity} units</li>
        </div>
        <div className="card-footer p-0 bg-dark">
          <button
            className="btn d-block w-100 text-white py-2 my-1 stock-btn"
            onClick={() => {
              handleUpdate(_id);
            }}
          >
            Update Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
