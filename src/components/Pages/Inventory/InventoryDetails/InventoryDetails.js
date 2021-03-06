import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Shared/Loading/Loading";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const url = `https://fathomless-tor-80045.herokuapp.com/delivered/${inventoryId}`;

  const {
    data: inventory,
    isLoading,
    refetch,
  } = useQuery("inventoryDetails", () => fetch(url).then((res) => res.json()));

  console.log(inventory);

  const presentQuantity = inventory?.quantity;
  let presentQuantityNumber = Number(presentQuantity);
  // console.log(presentQuantity);

  const [immidiateQuantity, setImmidaiateQuantity] = useState(
    presentQuantityNumber
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(immidiateQuantity);

  // ===============decrease one item =============

  let handleDelivered = () => {
    const quantity = presentQuantityNumber - 1;

    const url = `https://fathomless-tor-80045.herokuapp.com/product/${inventoryId}`;
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
          refetch();
          toast.success("Updating Data successfully. please wait...");
        }
      });
  };

  // ===============add/restock quantity item =============

  const submitRestock = (event) => {
    event.preventDefault();
    let addQuantity = event.target.addQuantity.value;
    const restockQuantity = parseInt(addQuantity);
    const quantity = presentQuantityNumber + restockQuantity;

    const immidiateQuantityNumber = presentQuantityNumber + restockQuantity;
    console.log(immidiateQuantityNumber);
    setImmidaiateQuantity(immidiateQuantityNumber);

    const url = `https://fathomless-tor-80045.herokuapp.com/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Hello from inventory restock details data", data);
        if (data?.modifiedCount) {
          refetch();
          toast.success("Restocking Data successfully. please wait...");
        }
      });

    document.getElementById("stockFieldId").value = "";
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mt-4">
            <div className="inventory-details border p-4">
              <div className="img-wrapper text-center">
                <img className="img-fluid" src={inventory?.image} alt="img" />
              </div>
              <div className="inventory-content mt-3">
                <p className="text-secondary">{inventory?.supplier}</p>
                <h5 className="card-title text-primary">
                  Name: {inventory?.name}
                </h5>
                <p className="lead">{inventory?.description}</p>
                <h4 className="">Price: ${inventory?.price}</h4>
                <li className="lead text-success">
                  Quantity: {presentQuantity} units.
                </li>
                {/* <li className="lead text-success">
                  Quantity: {presentQuantity} units.
                </li> */}
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
                    placeholder="Restock"
                    className="form-control"
                    id="stockFieldId"
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
                  {isLoading ? "loading..." : "Delivered one"}
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
