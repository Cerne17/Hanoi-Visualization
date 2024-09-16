import React, { useState, useEffect } from 'react';
import Tower from './Tower';
import Controls from './Controls';

const App = () => {
  const [towers, setTowers] = useState([[], [], []]);
  const [numDisks, setNumDisks] = useState(3);

  useEffect(() => {
    // Initialize the first tower with the disks
    const initialTowers = towers.map((tower, index) => [...tower]);
    setTowers(initialTowers);
  }, [numDisks]);

  const moveDisk = (from, to) => {
    // Implement the logic to move a disk from one tower to another
    const newTowers = towers.map((tower, index) => [...tower]);
    const disk = newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);
  };

  return (
    <div>
      <h1>Tower of Hanoi</h1>
      <div className="towers">
        {towers.map((tower, index) => (
          <Tower key={index} disks={tower} />
        ))}
      </div>
      <Controls moveDisk={moveDisk} />
    </div>
  );
};

export default App;
