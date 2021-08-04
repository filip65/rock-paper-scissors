import { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header";
import Choosing from "./components/Choosing";
import Result from "./components/Result";

const localScore = localStorage.getItem("score");

function App() {
  const [isChoosing, setIsChoosing] = useState(true);
  const [userChoise, setUserChoise] = useState(null);
  const [houseChoise, setHouseChoise] = useState(null);
  const [score, setScore] = useState(localScore ? parseInt(localScore) : 0);

  console.log(localScore);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const handleUserChoice = (usrChoice) => {
    const choices = ["paper", "rock", "scissors"];
    const index = Math.floor(Math.random() * 3);

    setUserChoise(usrChoice);
    setHouseChoise(choices[index]);
  };

  const scoreWin = () => {
    setScore(score + 1);
  };

  const scoreLose = () => {
    setScore(score - 1);
  };

  return (
    <div className="App">
      <Header score={score} />

      {isChoosing && (
        <Choosing
          handleUserChoice={handleUserChoice}
          setIsChoosing={setIsChoosing}
        />
      )}

      {!isChoosing && (
        <Result
          userChoise={userChoise}
          houseChoise={houseChoise}
          setIsChoosing={setIsChoosing}
          scoreWin={scoreWin}
          scoreLose={scoreLose}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default App;
