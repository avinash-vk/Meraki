import React from 'react';
import Maps from './Maps';
import StatusBar from './StatusBar';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div>
      <Maps />
      <StatusBar />
      <SearchBar />
      You're at home bruh.
    </div>
  );
};

export default Home;
