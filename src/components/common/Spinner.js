import React from "react";
import "../../spinner.css";

const Spinner = () => {
  return (

      <div className="my-5">
        <div className="sk-chase container">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>

  );
};

export default Spinner;
