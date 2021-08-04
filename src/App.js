import { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header";
import Choosing from "./components/Choosing";
import Result from "./components/Result";

function App() {
  const [isChoosing, setIsChoosing] = useState(true);
  const [userChoise, setUserChoise] = useState(null);
  const [houseChoise, setHouseChoise] = useState(null);

  useEffect(() => {
    const choices = ["paper", "rock", "scissors"];
    const index = Math.floor(Math.random() * 3);

    setHouseChoise(choices[index]);
  }, [userChoise]);

  return (
    <div className="App">
      <Header />

      {isChoosing && (
        <Choosing setUserChoise={setUserChoise} setIsChoosing={setIsChoosing} />
      )}

      {!isChoosing && (
        <Result userChoise={userChoise} houseChoise={houseChoise} />
      )}
    </div>
  );
}

export default App;
