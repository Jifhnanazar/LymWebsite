import React from "react";
import Srotating from "../assets/Videos/Rotating S.webm";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-2 font-roboto relative bg-neutral-50">
      <div>
        <video className="opacity-75" src={Srotating} autoPlay loop muted></video>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
        <h1 className="text-sm sm:text-lg w-[350px]  sm:w-[584px] md:text-xxl md:w-[580px] h-[104px]">
          "Transforming visions into captivating beauty, Our agency weaves
          digital dreams with creativity. Elevating brands with elegant design
          and grace, Unlocking the essence of aesthetics in every space."
        </h1>
        <div>
          <span className="mr-5 bg-[#0018FF] rounded-lg p-2 text-sm sm:text-lg">
            view projects
          </span>
          <span className="text-sm sm:text-lg">Read the Blogs</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
