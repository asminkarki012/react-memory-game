import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setscore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard />
    </div>
  );
}

export default App;
