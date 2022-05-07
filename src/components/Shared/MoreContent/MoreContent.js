import React from "react";
import { useNavigate } from "react-router-dom";

const MoreContent = () => {
  const navigate = useNavigate();
  const handleManageInventories = () => {
    navigate("/manageInventory");
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 border p-3 bg-white">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4>Want to check our more products?</h4>
              <p className="lead">
                You can find a lot of product in our gadgetly wearhouse. so take
                a look now
              </p>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-dark"
                onClick={handleManageInventories}
              >
                Manage Inventories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContent;
