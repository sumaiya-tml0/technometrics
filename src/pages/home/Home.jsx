import React from "react";
import Hero from "./Hero";
import OurVision from "./OurVision";
import Services from "./Services";
import Counter from "./Counter";
import Testimonials from "./Testimonials";
import GetTouch from "./GetTouch";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurVision />
      <Services />
      <Counter />
      <Testimonials />
      <GetTouch />
    </div>
  );
};

export default Home;
