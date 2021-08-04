import React from "react";

import "../styles/Result.scss";

import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconRock from "../images/icon-rock.svg";

import Button from "./Button";

function Result({ userChoise, houseChoise }) {
  return (
    <div className="result">
      <div className="column">
        <Button
          image={
            userChoise === "paper"
              ? iconPaper
              : userChoise === "rock"
              ? iconRock
              : iconScissors
          }
          type={userChoise}
        />
        <h3>you picked</h3>
      </div>

      <div className="column">
        <div className="circle">
          <p className="counter-number one">1</p>
          <p className="counter-number two">2</p>
          <p className="counter-number three">3</p>
        </div>
        <Button
          className="house-btn"
          image={
            houseChoise === "paper"
              ? iconPaper
              : houseChoise === "rock"
              ? iconRock
              : iconScissors
          }
          type={houseChoise}
        />
        <h3>the house picked</h3>
      </div>
    </div>
  );
}

export default Result;
