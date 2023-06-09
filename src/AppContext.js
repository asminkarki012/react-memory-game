// import React, { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {
//   const [score, setScore] = useState(0);
//   const [bestScore, setBestScore] = useState(0);

//   const onClickHandler = (event) => {
//     console.log("score", score);
//     setScore(score + 1);
//     console.log("SCORE", score);
//     setBestScore(score>bestScore?score:bestScore)
//   };

//   const values = {
//     score,
//     bestScore,
//     onClickHandler,
//   };

//   return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
// };
