import React from 'react';

const Controls = ({ handleSolve, handleReset, isSolving, setNumDisks, numDisks }) => {
  return (
    <div className="controls">
      <label>
        Number of Disks:
        <input
          type="number"
          min="1"
          max="5"
          value={numDisks}
          onChange={(event) => setNumDisks(Number(event.target.value))}
          disabled={isSolving}
        />
      </label>
      <button onClick={handleSolve} disabled={isSolving}>Solve</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;
