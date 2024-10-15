import React from 'react';

function Home() {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search for rentals..." />
        <button>Search</button>
      </div>
      <h1 className='ho'>Welcome to Our Rental Service</h1>
    </div>
  );
}

export default Home;
