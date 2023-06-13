import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameover from "./components/Gameover";
import { CHARACTERS } from "./DarkSoul3NPC";
import Winner from "./components/Winner";
// import { AppContextProvider } from "./AppContext";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [alreadyClickId, setAlreadyClickId] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  const onClickHandler = (id) => {
    console.log("id", id);
    console.log("score", score);
    setAlreadyClickId((prev) => [...prev, id]);
    if (alreadyClickId.includes(id)) {
      setGameOver(true);
      setBestScore(bestScore > score ? bestScore : score);
      setAlreadyClickId([]);
    } else {
      setScore(score + 1);
    }
    if (score === CHARACTERS.length - 1) {
      setWinner(true);
      setAlreadyClickId([]);
    }
  };

  const retryButtonHandler = () => {
    setScore(0);
    setBestScore(bestScore > score ? bestScore : score);
    setGameOver(false);
    setWinner(false);
  };
  return (
    // <AppContextProvider>
    <div className="flex flex-col items-center">
      <Header />
      {gameOver || winner ? (
        <>
          <Scoreboard score={score} bestScore={bestScore} />
          {gameOver && !winner ? (
            <Gameover retryButtonHandler={retryButtonHandler} />
          ) : (
            <Winner retryButtonHandler={retryButtonHandler} />
          )}
        </>
      ) : (
        <>
          <Scoreboard score={score} bestScore={bestScore} />
          <Gameboard
            onClickHandler={onClickHandler}
            score={score}
            CHARACTERS={CHARACTERS}
          />
        </>
      )}
    </div>
    // </AppContextProvider>
  );
}

export default App;
