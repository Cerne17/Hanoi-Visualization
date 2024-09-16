import React from 'react';

const diskColors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6']

const Disk = ({ size }) => {
  const width = 20 + size * 20; // Disk width is 20px + 20px per disk size
  const color = diskColors[size - 1];
  return <div className="disk" style={{ width: `${width}px`, backgroundColor: color }} />;
};

export default Disk;
