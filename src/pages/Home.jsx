import { useState } from 'react';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Main from '../components/Main';
import { useEffect } from 'react';
import About from '../components/About';
import Popular from '../components/Popular';

const Home = () => {
  return (
    <div className="home">
      <Main />
      <Popular />
      <About />
    </div>
  );
};

export default Home;
