import React from 'react';

interface RibbonCompIF {
  title: string;
}

function Ribbon({title}: RibbonCompIF) {
  return (
    <div className="absolute top-2 right-[-30px] px-2 py-1 rounded-full bg-primary rotate-45 text-white">{title}</div>
  );
}

export default Ribbon;
