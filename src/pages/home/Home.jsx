import React from "react";
import Hero from "./Hero";
import OurVision from "./OurVision";
import Counter from "./Counter";
import Testimonials from "./Testimonials";
import Solutions from "./Solutions";
import HowWeWork from "./HowWeWork";
import Industries from "./Industries";
import TechStack from "./TechStack";
import Strengths from "../about/Strengths";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurVision />
      <Solutions />
      <HowWeWork />
      <Industries />
      <Strengths />
      <TechStack />
      <Counter />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Home;
