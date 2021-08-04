import React, { useState, useEffect, useRef } from "react";

import "../styles/Result.scss";

import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconRock from "../images/icon-rock.svg";

import Button from "./Button";

function Result({
  userChoise,
  houseChoise,
  setIsChoosing,
  scoreWin,
  scoreLose,
  setScore,
}) {
  const [gameResult, setGameResult] = useState(null);
  const verdictRef = useRef(null);
  const userBtn = useRef(null);
  const houseBtn = useRef(null);

  useEffect(() => {
    if (userChoise === houseChoise) {
      setGameResult("draw");
    } else {
      if (userChoise === "rock") {
        if (houseChoise === "scissors") setGameResult("user");
        else setGameResult("house");
      }

      if (userChoise === "paper") {
        if (houseChoise === "rock") setGameResult("user");
        else setGameResult("house");
      }

      if (userChoise === "scissors") {
        if (houseChoise === "paper") setGameResult("user");
        else setGameResult("house");
      }
    }
  }, [userChoise, houseChoise]);

  useEffect(() => {
    setTimeout(() => {
      verdictRef.current.style.visibility = "visible";
      verdictRef.current.style.display = "block";

      if (gameResult === "user") {
        userBtn.current.classList.add("win");
      }

      if (gameResult === "house") {
        houseBtn.current.classList.add("win");
      }
    }, 2250);
  }, [gameResult]);

  useEffect(() => {
    setTimeout(() => {
      if (gameResult === "user") {
        scoreWin();
      }

      if (gameResult === "house") {
        scoreLose();
      }
    }, 2250);
    console.log("jouuuuu");
  }, [gameResult]);

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
          innerRef={userBtn}
        />
        <h3>you picked</h3>
      </div>

      <div className="verdict" ref={verdictRef}>
        <h2>
          {gameResult === "user"
            ? "You win!"
            : gameResult === "house"
            ? "You lose"
            : "it's draw"}
        </h2>
        <button className="playAgainBtn" onClick={() => setIsChoosing(true)}>
          play again
        </button>
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
          innerRef={houseBtn}
        />
        <h3>the house picked</h3>
      </div>
    </div>
  );
}

export default Result;
