
import React from 'react';
import Lottie from "lottie-react";
import animationData from "./animations/data-generation.json";

const LottieTest = () => {
  return (
    <div style={{ 
      border: '2px solid red',
      padding: '1rem',
      margin: '1rem auto',
      backgroundColor: '#333'
    }}>
      <h3 style={{ color: 'white', textAlign: 'center' }}>Lottie Test Component</h3>
      {/* 
        This is the crucial change.
        We are now using Tailwind CSS classes, which is the correct styling 
        method for this project, instead of conflicting inline styles.
      */}
      <div
        className="w-[250px] h-[250px] bg-white mx-auto"
        style={{ 
          border: '3px solid green'
        }}
      >
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default LottieTest;
