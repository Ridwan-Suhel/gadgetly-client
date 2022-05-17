import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    // const getItems = () => {
    const email = user.email;
    const url = `https://fathomless-tor-80045.herokuapp.com/myproduct?email=${email}`;
    // const { data } = await axios.get(url, {
    //   headers: {
    //     // "content-type": "applicaion/json",
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // });
    // setItem(data);
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        setItem(data);
        console.log(data);
      })
    );
    // };
    // getItems();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      // console.log("delete", id);
      const url = `https://fathomless-tor-80045.herokuapp.com/myproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted", id);
            const remaining = item.filter((product) => product._id !== id);
            setItem(remaining);
          }
        });
    }
  };

  return (
    <div className="py-5">
      <div className="container">
        <h1 className="py-5">You Have {item.length} Item</h1>
        <div className="row">
          {item?.map((i) => (
            <div key={i._id} className="col-md-4 ">
              <div className="single-item-box border p-3">
                <div className="img-wrapper">
                  <img src={i.image} className="img-fluid" alt="img" />
                </div>
                <div className="item-content mt-3">
                  <h5 className="">Supplier: {i.supplier}</h5>
                  <h5>Name: {i.name}</h5>
                  <p className="lead">{i.description}</p>
                  <h5 className="">Price: {i.price}</h5>
                  <h5 className="">Quantity: {i.quantity}</h5>
                </div>
                <div className="item-footer">
                  <button
                    className="btn btn-danger w-100 mt-3"
                    onClick={() => handleDelete(i._id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItem;
