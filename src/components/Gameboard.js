import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../AppContext";

const Gameboard = (props) => {
  // const [characters, setCharacters] = useState([]);
  //use app context
  // const { score, onClickHandler } = useContext(AppContext);
  // console.log(CHARACTERS, "characterss");
  const { CHARACTERS } = props;
  const { onClickHandler, score } = props;
  const [randomCharacters, setRandomCharacters] = useState([]);

  useEffect(() => {
    shuffleCharacters();
  }, [score]);

  const shuffleCharacters = () => {
    const shuffled = [...CHARACTERS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setRandomCharacters(shuffled);
  };
  // console.log("RANDOM characters", randomCharacters);

  return (
    <div className="my-4">
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {randomCharacters.map((chara) => {
          return (
            <>
              <div
                key={chara.id}
                className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                onClick={() => onClickHandler(chara.id)}
              >
                <img
                  src={chara.url}
                  className="h-48 rounded"
                  alt="Dark Soul Logo"
                  width="300"
                  height="300"
                ></img>
                <h1 className="text-md text-center font-semibold text-white">
                  {chara.name}
                </h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Gameboard;
