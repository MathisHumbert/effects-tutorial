import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Featured from '../components/Featured';
import About from '../components/About';
import Gallery from '../components/Gallery';

import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <div className="main-container" id="main-container">
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};
export default Home;
