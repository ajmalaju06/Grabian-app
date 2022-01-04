import React from "react";
import "../css/application.css";

function NavBar() {
  return (
    <header>
      <nav className="container flex p-5">
        <h1 className="text-3xl font-bold ml-10 flex-1  text-left">GRABIAN</h1>
        <div className="flex items-center">
          <ul className="flex nav-menu text-sm">
            <li>Home</li>
            <li>Articles</li>
            <li>Q&#38;A</li>
          </ul>
          <div className="rounded-full pl-5 bg-gray-100 h-9 items-center flex">
            <span className="text-sm w-20 mr-4">SIGN IN</span>
            <span className="rounded-full px-5 h-9 bg-yellow-400 items-center flex text-sm ">
              SIGN UP
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
