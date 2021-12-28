import React, { useEffect, useRef, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Featured from '../components/Featured';
import About from '../components/About';
import Gallery from '../components/Gallery';

import '../styles/home.scss';
import useLocalScroll from '../hooks/useLocalScroll';

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);
  const id = useRef(null);

  // locomotive scroll
  useLocalScroll(!preloader);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  // run when we mount the component
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  // run when the timer is done
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
