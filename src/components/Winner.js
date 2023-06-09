import React from "react";

const Winner = (props) => {
  const { retryButtonHandler } = props;
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-white text-8xl">WINNER!!!</h1>
      <button
        onClick={retryButtonHandler}
        className="bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-60"
      >
        RETRY
      </button>
    </div>
  );
};

export default Winner;
