import React from "react";
import "../styles/Buttons.scss";

import triangleIcon from "../images/bg-triangle.svg";
import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconRock from "../images/icon-rock.svg";

function Buttons() {
  return (
    <div className="buttons">
      <img src={triangleIcon} alt="" className="triangle-bg" />
      <button className="btn-paper">
        <img src={iconPaper} alt="" className="" />
      </button>
      <button className="btn-scissors">
        <img src={iconScissors} alt="" className="" />
      </button>
      <button className="btn-rock">
        <img src={iconRock} alt="" className="" />
      </button>
    </div>
  );
}

export default Buttons;
