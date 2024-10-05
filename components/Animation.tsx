"use client";
import React, { useEffect } from "react";

const Animation: React.FC = () => {
  useEffect(() => {
    // grab everything we need
    const gridItems: NodeListOf<HTMLDivElement> = document.querySelectorAll(
      ".grid-background > div"
    );

    // loop over grid items and create a random duration + delay for each
    gridItems.forEach((item: HTMLDivElement) => {
      // calculate random number for delay
      const delay: number = getRandomInt(0, 5);

      // calculate random number for duration
      const duration: number = getRandomInt(3, 6);

      // set both
      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });
  }, []);

  // function to get a random integer between min and max (inclusive)
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-navy">
      {/* grid background */}
      <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-125">
        {/* row 1 */}
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        {/* row 2 */}
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        {/* row 3 */}
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        {/* row 4 */}
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>

        {/* row 5 */}
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        {/* row 6 */}
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        {/* row 7 */}
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
      </div>

      {/* content */}
      {/* <div className="relative">
          <h2 className="text-4xl text-white font-extrabold">
            Welcome <span className="text-purple-500">Grid</span> Background
          </h2>
        </div> */}
    </div>
  );
};

export default Animation;
