import React from 'react';

const Controls = ({ handleSolve, handleReset, isSolving }) => {
  return (
    <div className="controls">
      <button onClick={handleSolve} disabled={isSolving}>Solve</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;
