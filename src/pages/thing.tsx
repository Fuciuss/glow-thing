import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CircleImage = ({ imageSrc, active, onClick }) => (
    <div
      onClick={onClick}
      className={`relative w-20 h-20 rounded-full overflow-hidden cursor-pointer group ${
        active ? "ring-8 ring-orange-400 ring-opacity-20" : ""
      } transition-all duration-300 ease-in-out`}
    >
      <img src={imageSrc} alt="circle" className="w-full h-full object-cover" />
      {active && (
        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
      )}
    </div>
  );
const CircleGlowComponent = () => {
  const [activeCircle, setActiveCircle] = useState(0);

  const circles = [
    { id: 0, imageSrc: "path/to/image1.jpg" },
    { id: 1, imageSrc: "path/to/image2.jpg" },
    { id: 2, imageSrc: "path/to/image3.jpg" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
    
        <div className="flex justify-center space-x-4">
          {circles.map(({ id, imageSrc }) => (
            <CircleImage
              key={id}
              imageSrc={imageSrc}
              active={id === activeCircle}
              onClick={() => setActiveCircle(id)}
            />
          ))}

      </div>
    </div>
  );
};

export default CircleGlowComponent;
