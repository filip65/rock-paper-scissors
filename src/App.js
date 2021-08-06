import { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header";
import Choosing from "./components/Choosing";
import Result from "./components/Result";
import Rules from "./components/Rules";

import AddToHomeScreen from "@ideasio/add-to-homescreen-react";

const localScore = localStorage.getItem("score");

function App() {
  const [isChoosing, setIsChoosing] = useState(true);
  const [userChoise, setUserChoise] = useState(null);
  const [houseChoise, setHouseChoise] = useState(null);
  const [score, setScore] = useState(localScore ? parseInt(localScore) : 0);
  const [isRulesOpen, setIsRulesOpes] = useState(false);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const handleUserChoice = (usrChoice) => {
    const choices = ["paper", "rock", "scissors"];
    const index = Math.floor(Math.random() * 3);

    setUserChoise(usrChoice);
    setHouseChoise(choices[index]);
  };

  return (
    <div className="App">
      <AddToHomeScreen title="jou chces to instalovat?" />
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
          setScore={setScore}
          score={score}
        />
      )}

      <button className="rules-btn" onClick={() => setIsRulesOpes(true)}>
        Rules
      </button>
      {isRulesOpen && <Rules setIsRulesOpes={setIsRulesOpes} />}
    </div>
  );
}

export default App;
