import { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header";
import Choosing from "./components/Choosing";
import Result from "./components/Result";

function App() {
  const [isChoosing, setIsChoosing] = useState(true);
  const [userChoise, setUserChoise] = useState(null);
  const [houseChoise, setHouseChoise] = useState(null);

  const handleUserChoice = (usrChoice) => {
    const choices = ["paper", "rock", "scissors"];
    const index = Math.floor(Math.random() * 3);

    setUserChoise(usrChoice);
    setHouseChoise(choices[index]);
  };

  return (
    <div className="App">
      <Header />

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
        />
      )}
    </div>
  );
}

export default App;
