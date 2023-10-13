'use client'; // Error components must be Client Components

export default function Error() {
  return (
    <div className="w-screen h-screen bg-dark absolute z-30 top-0 left-0 bg-color-bg text-color-text flex items-center justify-center">
      <div className="text-5xl">Something Went Wrong!</div>
    </div>
  );
}
