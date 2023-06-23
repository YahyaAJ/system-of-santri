import React from "react";
import image from "../assets/pxfuel__6_-removebg-preview.png";

function NotFound() {
  return (
    <div className="h-screen w-full">
      <div className="absolute z-[-1] top-[45%] left-[28%] rotate-[27deg]">
        <p className="notfound text-[6rem] border-[crimson]">404 Not Found</p>
      </div>
      <div className="h-screen flex justify-center items-end ">
        <img src={image} />
      </div>
    </div>
  );
}

export default NotFound;
