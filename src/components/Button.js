import React from "react";

import "../styles/Button.scss";

function Button({ image, type, handleClick, className = "" }) {
  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={() => handleClick(type)}
    >
      <img src={image} alt="" />
    </button>
  );
}

export default Button;
