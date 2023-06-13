import React from "react";

const Scoreboard = (props) => {
  const { score, bestScore } = props;
  // const { score, bestScore } = useContext(AppContext);
  return (
    <div className="flex gap-8 text-white font-semibold text-lg">
      <h1>Your Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  );
};

export default Scoreboard;
