import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="manageInventory">
      <div className="container">
        <h1>Manage Inventory</h1>
        <div className="inventory-table">
          <div className="row">
            <div className="col-md-12">
              <Table responsive striped bordered hover className="mInv-table">
                <thead>
                  <tr>
                    <th>Supplier</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.supplier}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <div className="btn-wrapper d-flex">
                          <div className="btn btn-danger me-3">Delete</div>
                          <div className="btn btn-success">Add Item</div>
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
