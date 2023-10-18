import React from 'react';

interface RibbonCompIF {
  title: string;
}

function Ribbon({title}: RibbonCompIF) {
  return (
    <div className="movie-ribbon-wrapper">
      <div className="movie-ribbon">{title}</div>
    </div>
  );
}

export default Ribbon;
