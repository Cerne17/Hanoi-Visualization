import React from 'react';

const Controls = ({ moveDisk }) => {
  // Implement the logic to handle the user actions
  const handleStart = () => {
    // Logic to start the simulation
  };

  const handleReset = () => {
    // Logic to reset the simulation
  };

  return (
    <div className="controls">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;
