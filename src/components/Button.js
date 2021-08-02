import React from "react";

import "../styles/Button.scss";

function Button({ image, type, handleClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={() => handleClick(type)}>
      <img src={image} alt="" />
    </button>
  );
}

export default Button;
