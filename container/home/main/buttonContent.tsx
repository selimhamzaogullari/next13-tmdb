'use client';
import Button from '@/components/button';
import React from 'react';

const goDetailPage = () => {
  console.log('Detail page');
};

const showTrailer = () => {
  console.log('Show Trailer');
};

function ButtonContent() {
  return (
    <div className="flex gap-x-7">
      <Button onClick={showTrailer}>Intro</Button>
      <Button onClick={goDetailPage} transparent>
        Detail
      </Button>
    </div>
  );
}

export default ButtonContent;
