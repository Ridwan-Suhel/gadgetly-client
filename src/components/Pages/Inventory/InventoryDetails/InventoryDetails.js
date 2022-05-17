import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});
  const newQuantity = inventory.quantity - 1;
  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  // ===============decrease one item =============
  const handleDelivered = () => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Hello from inventory details data", data);
      });
  };

  // ===============add quantity item =============
  const submitRestock = (event) => {
    event.preventDefault();
    const addQuantity = event.target.addQuantity.value;
    const addQuantityInNum = parseInt(addQuantity);
    const quanValue = {
      addQuantityInNum,
    };
    console.log("quanty value", quanValue);
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quanValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Hello from inventory details data", data);
      });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mt-4">
            <div className="inventory-details border p-4">
              <div className="img-wrapper text-center">
                <img className="img-fluid" src={inventory.image} alt="img" />
              </div>
              <div className="inventory-content mt-3">
                <p className="text-secondary">{inventory.supplier}</p>
                <h5 className="card-title text-primary">
                  Name: {inventory.name}
                </h5>
                <p className="lead">{inventory.description}</p>
                <h4 className="">Price: ${inventory.price}</h4>
                <li className="lead text-success">
                  Quantity: {newQuantity} units
                </li>
              </div>
              <div className="inventory-input mt-3">
                <form
                  onSubmit={submitRestock}
                  action=""
                  className="inventoryinput-form d-flex gap-3"
                >
                  <input
                    type="number"
                    name="addQuantity"
                    className="form-control"
                  />
                  <input
                    type="submit"
                    className="btn btn-dark text-white w-50"
                    value="Restock"
                  />
                </form>
              </div>
              <div className="inventory-footer bg-black mt-3">
                <button
                  className="btn d-block w-100 text-white py-2 my-1 delivered-btn"
                  onClick={handleDelivered}
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryDetails;
