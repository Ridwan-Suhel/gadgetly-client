import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    const url = `http://localhost:5000/product?search=${searchTxt}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [searchTxt]);

  // console.log(products);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      // console.log("delete", id);
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted", id);
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate("/addinventory");
  };

  const handleSearch = (e) => {
    setSearchTxt(e.target.value);
  };

  console.log(searchTxt);

  return (
    <section className="manageInventory">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-6">
            <h1>Manage Inventory</h1>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-success" onClick={handleAddItem}>
              Add New Inventory Item
            </button>
          </div>
        </div>

        {/* ========================handle search box  */}
        <div className="row mb-4">
          <div className="col-lg-4">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by Product or Supplier"
                onChange={handleSearch}
                className="input form-control"
              />
            </div>
          </div>
        </div>

        <div className="inventory-table">
          <div className="row">
            <div className="col-md-12">
              <Table responsive striped bordered hover className="mInv-table">
                <thead>
                  <tr>
                    <th>Supplier</th>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.supplier}</td>
                      <td>{product.name}</td>
                      <td>
                        {product?.description?.slice(0, 22).concat("...")}
                      </td>
                      <td>{product.price}</td>
                      <td>
                        <div className="btn-wrapper">
                          <div
                            className="btn btn-danger me-3"
                            onClick={() => handleDelete(product._id)}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageInventory;
