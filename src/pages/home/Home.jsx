import React from "react";
import Hero from "./Hero";
import OurVision from "./OurVision";
import Counter from "./Counter";
import Testimonials from "./Testimonials";
import Solutions from "./Solutions";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurVision />
      <Solutions/>
      <Counter />
      <Testimonials />
    </div>
  );
};

export default Home;
