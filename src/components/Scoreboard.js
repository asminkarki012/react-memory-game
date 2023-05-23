import React from "react";

function Scoreboard(props) {
  const { score, bestScore } = props;
  return (
    <div className="flex gap-8 text-white font-semibold text-lg">
      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  );
}

export default Scoreboard;
