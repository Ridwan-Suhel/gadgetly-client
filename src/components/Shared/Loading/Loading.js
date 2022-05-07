import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div>
      <div className="loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
