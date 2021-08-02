import { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import Choosing from "./components/Choosing";
import Result from "./components/Result";

function App() {
  const [isChoosing, setIsChoosing] = useState(true);
  const [userChoise, setUserChoise] = useState("null");

  return (
    <div className="App">
      <Header />

      {isChoosing && (
        <Choosing setUserChoise={setUserChoise} setIsChoosing={setIsChoosing} />
      )}

      {!isChoosing && <Result />}
    </div>
  );
}

export default App;
