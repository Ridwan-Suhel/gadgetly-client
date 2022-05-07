import React from "react";
import { useForm } from "react-hook-form";
const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        e.target.reset();
      });
  };
  return (
    <section className="addInventory">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-7">
            <p className="lead">Add New Inventory</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true, maxLength: 20 })}
                className="form-control mb-3"
                placeholder="Write name"
              />
              <input
                {...register("supplier", { required: true })}
                className="form-control mb-3"
                placeholder="Write supplier name"
              />
              <input
                type="text"
                {...register("image", { required: true })}
                className="form-control mb-3"
                placeholder="Write image url link"
              />
              <input
                type="number"
                {...register("price", { required: true })}
                className="form-control mb-3"
                placeholder="Write price"
              />
              <input
                type="number"
                {...register("quantity", { required: true })}
                className="form-control mb-3"
                placeholder="Write quantity"
              />
              <textarea
                {...register("description", { required: true })}
                className="form-control mb-3"
                placeholder="Write description"
              ></textarea>
              <input
                type="submit"
                value="Add Item"
                className="btn btn-dark px-5"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddInventory;
