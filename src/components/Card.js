import React from "react";
import abyssWatcher from "../img/abysswatchers.jpg";
import aldrich from "../img/aldrich.jpg";
import andre from "../img/blacksmithandre.jpg";

function Card() {
  return (
    <div className="my-2">
      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <img src={andre} className="h-48 rounded" alt="Dark Soul Logo"></img>
          <h1 className="text-md font-semibold text-[#E7D969]">
            BLACKSMITH ANDRE
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
