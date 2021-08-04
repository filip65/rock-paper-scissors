import React from "react";

import "../styles/Result.scss";

import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconRock from "../images/icon-rock.svg";

import Button from "./Button";

function Result({ userChoise }) {
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
        {/* <div className="circle"></div> */}
        <div className="circle"></div>
        <h3>the house picked</h3>
      </div>
    </div>
  );
}

export default Result;
