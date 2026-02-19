import React from "react";
import logo from "../assets/photos/logo.png";

const GetApp = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4
    bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
      
      <div className=" text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          App Launching Soon
        </h1>
        <img
          src={logo}
          alt="App Logo"
          className="mx-auto w-60 md:w-64 filter invert"
        />
      </div>
    </div>
  );
};

export default GetApp;
