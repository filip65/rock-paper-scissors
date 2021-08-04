import React from "react";

import "../styles/Rules.scss";

import rulesImg from "../images/image-rules.svg";
import iconClose from "../images/icon-close.svg";

function Rules({ setIsRulesOpes }) {
  return (
    <div className="rules">
      <div className="wrapper">
        <h2>Rules</h2>
        <img src={rulesImg} alt="" />
        <button onClick={() => setIsRulesOpes(false)}>
          <img src={iconClose} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Rules;
