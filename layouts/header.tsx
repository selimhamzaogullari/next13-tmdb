import React from 'react';

function HeaderLayout() {
  return (
    <header
      className="bg-gradient-to-b container-screen fluid"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))',
      }}>
      <div className="flex items-center">
        <div className="min-w-[125px] text-4xl">LOGO</div>
        <ul className="flex gap-x-3">
          <li>Home</li>
          <li>Latest</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Upcoming</li>
        </ul>
        <div className="ml-10">Search</div>
      </div>
    </header>
  );
}

export default HeaderLayout;
