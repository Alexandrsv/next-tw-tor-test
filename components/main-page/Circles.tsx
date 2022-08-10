import React from "react";

const Circles = () => {
  const circles = Array(200)
    .fill(0)
    .map((_, i) => i)
    .reverse();
  return (
    <>
      {circles.map((circle) => (
        <div
          key={circle}
          style={{
            height: `${circle * 14}px`,
            width: `${circle * 14}px`,
            filter: `hue-rotate(${circle * 2}deg) blur(${circle * 0.02}px)`,
          }}
          className={`absolute border rounded-full border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          `}
        />
      ))}
    </>
  );
};

export default Circles;
