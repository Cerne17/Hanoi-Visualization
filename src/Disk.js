import React from 'react';

const Disk = ({ size }) => {
  const width = 20 + size * 20; // Disk width is 20px + 20px per disk size
  return <div className="disk" style={{ width: $`{width}px` }} />;
};

export default Disk;
