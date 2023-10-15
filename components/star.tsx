import React from 'react';
import {IoIosStar, IoIosStarOutline, IoIosStarHalf} from 'react-icons/io';

interface StarIF {
  vote: number;
}

function Star({vote}: StarIF) {
  const floor = Math.floor(Math.round(vote) / 2);
  const mod = Math.round(vote) % 2;
  return (
    <div className="flex gap-x-2">
      {new Array(floor).fill('').map((x, i) => (
        <div key={i}>
          <IoIosStar color="var(--color-primary)" size="2em" />
        </div>
      ))}
      {mod === 1 && <IoIosStarHalf color="var(--color-primary)" size="2em" />}
      {new Array(5 - (floor + mod)).fill('').map((x, i) => (
        <div key={i + 20}>
          <IoIosStarOutline color="var(--color-primary)" size="2em" />
        </div>
      ))}
    </div>
  );
}

export default Star;
