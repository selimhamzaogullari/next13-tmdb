import React from 'react';

interface OverviewCompIF {
  overview: string;
}

function Overview({overview}: OverviewCompIF) {
  return <div className="text-lg line-clamp-3 mb-6 leading-8">{overview}</div>;
}

export default Overview;
