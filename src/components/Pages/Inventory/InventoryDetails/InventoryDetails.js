import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Shared/Loading/Loading";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const url = `http://localhost:5000/delivered/${inventoryId}`;

  const { data: inventory, isLoading } = useQuery("inventoryDetails", () =>
    fetch(url).then((res) => res.json())
  );

  const presentQuantity = inventory?.quantity;
  let presentQuantityNumber = Number(presentQuantity);

  if (isLoading) {
    return <Loading></Loading>;
  }

  // ===============decrease one item =============

  let handleDelivered = () => {
    const quantity = presentQuantityNumber - 1;

    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Hello from inventory details data", data);
        if (data?.modifiedCount) {
          toast.success("Updating Data successfully. please wait.");
        }
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
                  Quantity: {presentQuantity} units.
                </li>
              </div>
              {/* restock  */}
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
              {/* delivered  */}
              <div className="inventory-footer bg-black mt-3">
                <button
                  className="btn d-block w-100 text-white py-2 my-1 delivered-btn"
                  onClick={handleDelivered}
                >
                  {isLoading ? "loading..." : "Delivered"}
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
