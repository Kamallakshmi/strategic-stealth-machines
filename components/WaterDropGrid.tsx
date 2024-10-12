// import React, { useState, useEffect } from "react";
// import anime from "animejs";

// const WaterDropGrid: React.FC = () => {
//   return (
//     <div className="relative flex justify-center px-8 py-12">
//       <DotGrid />
//     </div>
//   );
// };

// const GRID_WIDTH_LARGE = 25; // For large screens
// const GRID_WIDTH_SMALL = 10; // For small screens
// const GRID_HEIGHT = 20;

// const DotGrid: React.FC = () => {
//   const [gridWidth, setGridWidth] = useState(GRID_WIDTH_LARGE);

//   useEffect(() => {
//     // Check the screen size only after the component has mounted (client-side)
//     const updateGridWidth = () => {
//       const isSmallScreen = window.innerWidth < 640;
//       setGridWidth(isSmallScreen ? GRID_WIDTH_SMALL : GRID_WIDTH_LARGE);
//     };

//     updateGridWidth(); // Set the initial grid width

//     // Listen for window resize events to update grid width accordingly
//     window.addEventListener("resize", updateGridWidth);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", updateGridWidth);
//     };
//   }, []);

//   const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const targetIndex = e.currentTarget.dataset.index;

//     // Trigger animation using anime.js
//     anime({
//       targets: ".dot-point",
//       scale: [
//         { value: 1.35, easing: "easeOutSine", duration: 250 },
//         { value: 1, easing: "easeInOutQuad", duration: 500 },
//       ],
//       translateY: [
//         { value: -15, easing: "easeOutSine", duration: 250 },
//         { value: 0, easing: "easeInOutQuad", duration: 500 },
//       ],
//       opacity: [
//         { value: 1, easing: "easeOutSine", duration: 250 },
//         { value: 0.5, easing: "easeInOutQuad", duration: 500 },
//       ],
//       delay: anime.stagger(100, {
//         grid: [gridWidth, GRID_HEIGHT],
//         from: targetIndex ? parseInt(targetIndex) : undefined,
//       }),
//     });
//   };

//   const dots: JSX.Element[] = [];
//   let index = 0;

//   for (let i = 0; i < gridWidth; i++) {
//     for (let j = 0; j < GRID_HEIGHT; j++) {
//       dots.push(
//         <div
//           className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
//           data-index={index}
//           key={`${i}-${j}`}
//           onClick={handleDotClick}
//         >
//           <div
//             className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
//             data-index={index}
//           />
//         </div>
//       );
//       index++;
//     }
//   }

//   return (
//     <div
//       style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
//       className="grid w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg"
//     >
//       {dots}
//     </div>
//   );
// };

// export default WaterDropGrid;

import React, { useState, useEffect } from "react";
import anime from "animejs";

const WaterDropGrid: React.FC = () => {
  return (
    <div className="relative flex justify-center -top-7">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH_LARGE = 25; // For large screens
const GRID_WIDTH_SMALL = 10; // For small screens
const GRID_HEIGHT_LARGE = 20; // Original grid height
const GRID_HEIGHT_SMALL = 16; // Reduced by 4 rows for small screens

const DotGrid: React.FC = () => {
  const [gridWidth, setGridWidth] = useState<number | null>(null);
  const [gridHeight, setGridHeight] = useState<number | null>(null);

  // Initialize dimensions on first render
  useEffect(() => {
    const updateGridDimensions = () => {
      const isSmallScreen = window.innerWidth < 640;
      setGridWidth(isSmallScreen ? GRID_WIDTH_SMALL : GRID_WIDTH_LARGE);
      setGridHeight(isSmallScreen ? GRID_HEIGHT_SMALL : GRID_HEIGHT_LARGE);
    };

    updateGridDimensions(); // Set the initial grid dimensions on mount
    window.addEventListener("resize", updateGridDimensions); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateGridDimensions); // Cleanup event listener
    };
  }, []);

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetIndex = e.currentTarget.dataset.index;

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.8, easing: "easeOutSine", duration: 250 }, // Temporarily brighten
        { value: 0.1, easing: "easeInOutQuad", duration: 500 }, // Return to faded state
      ],
      delay: anime.stagger(100, {
        grid: [gridWidth!, gridHeight!],
        from: targetIndex ? parseInt(targetIndex) : undefined,
      }),
    });
  };

  // Render a placeholder until grid dimensions are determined
  if (gridWidth === null || gridHeight === null) {
    return (
      <div className="grid w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto">
        {Array.from({ length: GRID_HEIGHT_SMALL }).map((_, index) => (
          <div key={index} className="h-2 w-2 bg-transparent" />
        ))}
      </div>
    );
  }

  const dots: JSX.Element[] = [];
  let index = 0;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
          onClick={handleDotClick}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-amber-600 to-amber-400 opacity-10 group-hover:from-indigo-400 group-hover:to-amber-200"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div className="flex justify-center">
      <div
        style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
        className="grid w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto"
      >
        {dots}
      </div>
    </div>
  );
};

export default WaterDropGrid;
