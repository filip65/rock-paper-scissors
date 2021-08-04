import React from "react";

import "../styles/Header.scss";

function Header({ score }) {
  return (
    <div className="header">
      <h1>
        Rock <br /> Paper <br /> Scissors
      </h1>
      <div className="score">
        <p className="score__text">SCORE</p>
        <p id="score__number">{score}</p>
      </div>
    </div>
  );
}

export default Header;
