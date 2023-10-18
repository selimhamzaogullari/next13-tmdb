import React from 'react';

function FooterLayout() {
  return (
    <div className="container-screen fluid bg-black-dark text-white py-10 min-h-[300px]">
      <div className="grid grid-cols-4">
        <div>
          <h3 className="text-color-text text-xl mb-5">Movie Name</h3>
          <ul className="text-color-text-secondary">
            <li className="mt-2">About</li>
            <li className="mt-2">Basic Info</li>
            <li className="mt-2">General Policy</li>
            <li className="mt-2">Mobile App</li>
            <li className="mt-2">Help</li>
          </ul>
        </div>
        <div>
          <h3 className="text-color-text text-xl mb-5">MOVIES</h3>
          <ul className="text-color-text-secondary">
            <li className="mt-2">About</li>
            <li className="mt-2">Basic Info</li>
            <li className="mt-2">General Policy</li>
            <li className="mt-2">Mobile App</li>
            <li className="mt-2">Help</li>
          </ul>
        </div>
        <div>
          <h3 className="text-color-text text-xl mb-5">SERIES</h3>
          <ul className="text-color-text-secondary">
            <li className="mt-2">About</li>
            <li className="mt-2">Basic Info</li>
            <li className="mt-2">General Policy</li>
            <li className="mt-2">Mobile App</li>
            <li className="mt-2">Help</li>
          </ul>
        </div>
        <div>
          <h3 className="text-color-text text-xl mb-5">SUPPORT</h3>
          <ul className="text-color-text-secondary">
            <li className="mt-2">About</li>
            <li className="mt-2">Basic Info</li>
            <li className="mt-2">General Policy</li>
            <li className="mt-2">Mobile App</li>
            <li className="mt-2">Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterLayout;
