import React from 'react';
import Disk from './Disk';

const Tower = ({ disks }) => {
  return (
    <div className="tower">
      {disks.map((disk, index) => (
        <Disk key={index} size={disk} />
      ))}
    </div>
  );
}

export default Tower;
