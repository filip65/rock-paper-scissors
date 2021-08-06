import React from "react";
import "../styles/Choosing.scss";

import triangleIcon from "../images/bg-triangle.svg";
import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconRock from "../images/icon-rock.svg";

import Button from "./Button";

function Choosing({ handleUserChoice, setIsChoosing }) {
  const handleClick = (choise) => {
    setIsChoosing(false);
    handleUserChoice(choise);
  };

  return (
    <div className="choosing">
      <img src={triangleIcon} alt="" className="triangle-bg" />
      <Button
        image={iconPaper}
        type="paper"
        handleClick={handleClick}
        text="paper button"
      />
      <Button
        image={iconScissors}
        type="scissors"
        handleClick={handleClick}
        text="scissors button"
      />
      <Button
        image={iconRock}
        type="rock"
        handleClick={handleClick}
        text="rock button"
      />
    </div>
  );
}

export default Choosing;
