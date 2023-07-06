import React, { useEffect, useState } from 'react';
import Srotating from "../assets/Videos/Tech.mp4";


const HeroSection = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentLength = displayText.length;
      const targetLength = text.length;

      if (currentLength === targetLength) {
        clearInterval(timer);
      } else {
        setDisplayText(text.substring(0, currentLength + 1));
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [text, displayText]);

  return (
    <div className="bg-gray-950">
      <div className="container mx-auto px-8 py-16 sm:py-52">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 overflow-hidden whitespace-no-wrap">
              <span className="inline-block" style={{ animation: 'textAnimation 2s steps(40) forwards' }}>
                {displayText}
              </span>
            </h1>
            <p className="py-10 text-lg md:text-xl text-blue-300 mb-8">
              "Transforming visions into captivating beauty, Our agency weaves digital dreams with creativity. Elevating brands with elegant design and grace, Unlocking the essence of aesthetics in every space."
            </p>
    
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-500 transition duration-300 sm:text-base md:text-lg lg:text-xl"
              >
                View Projects
              </a>
              <a
                href="#"
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 sm:text-base md:text-lg lg:text-xl"
              >
                Read Blogs
              </a>
            </div>
          </div>
          <div className="relative">
            <video className="opacity-75" src={Srotating} autoPlay loop muted></video>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
