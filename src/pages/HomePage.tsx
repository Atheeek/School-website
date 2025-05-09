import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Programs from '../components/home/Programs';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import NewsEvents from '../components/home/NewsEvents';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Cdac Academy | Excellence in Education';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <NewsEvents />
      <CallToAction />
    </>
  );
};

export default HomePage;