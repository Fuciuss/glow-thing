import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CircleImage = ({ imageSrc, active, onClick }) => (
    <div onClick={onClick} className="circle">
      <img src={imageSrc} alt="circle" className="circle-image"/>{active}
    </div>
  );

const CircleGlowComponent = () => {
  const [activeCircle, setActiveCircle] = useState(0);

  const circles = [
    { id: 0, imageSrc: "image1.png" },
    { id: 1, imageSrc: "image2.png" },
    { id: 2, imageSrc: "image3.png" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
    
        <div className="flex justify-center space-x-10">
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
