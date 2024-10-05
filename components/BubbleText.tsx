import React from "react";

const BubbleText = ({ text }: { text: string }) => {
  return (
    <h2 className="text-center text-4xl md:text-5xl font-thin text-blue-500">
      {text.split("").map((char, idx) => (
        <span className="hoverText" key={idx}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
