import React, { useState, useEffect } from 'react';
import Tower from './Tower';
import Controls from './Controls';

const App = () => {
  const [towers, setTowers] = useState([[], [], []]);
  const [numDisks] = useState(3);
  const [isSolving, setIsSolving] = useState(false);

  useEffect(() => {
    // Initialize the first tower with the disks
    const initialTowers = [Array.from({ length: numDisks }, (_, index) => numDisks - index), [], []];
    setTowers(initialTowers);
  }, [numDisks]);

  const moveDisk = (from, to) => {
    // Implement the logic to move a disk from one tower to another
    setTowers((prevTowers) => {
      const newTowers = prevTowers.map((tower, index) => [...tower]);
      const disk = newTowers[from].pop();
      newTowers[to].push(disk);
      return newTowers;
    });
  };

  const solveHanoi = (n, source, target, auxiliary) => {
    // Implement the logic to solve the Tower of Hanoi
    if (n === 0) { return };

    solveHanoi(n - 1, source, auxiliary, target);

    setTimeout(() => {
      moveDisk(source, target);
    }, 500);

    solveHanoi(n - 1, auxiliary, target, source);
  };

  const handleSolve = () => {
    setIsSolving(true);
    solveHanoi(numDisks, 0, 2, 1);
  };

  const handleReset = () => {
    setIsSolving(false);
    const initialTowers = [Array.from({ length: numDisks }, (_, index) => index + 1), [], []];
    setTowers(initialTowers);
  };

  return (
    <div>
      <h1>Tower of Hanoi</h1>
      <div className="towers">
        {towers.map((tower, index) => (
          <Tower key={index} disks={tower} />
        ))}
      </div>
      <Controls handleSolve={handleSolve} handleReset={handleReset} isSolving={isSolving} />
    </div>
  );
};

export default App;
