import React from "react";
import logo from "../img/darksoul-logo.jpg";

function Header() {
  return (
    <div className="my-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={logo} className="h-48 rounded" alt="Dark Soul Logo"></img>
        <h1 className="text-xl font-semibold text-[#E7D969]">Memory Game</h1>
      </div>
    </div>
  );
}

export default Header;
