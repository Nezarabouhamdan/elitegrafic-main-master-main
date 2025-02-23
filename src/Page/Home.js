import React from "react";
import HeroSlider from "../components/Slider/Slider";
import FeaturedProjects from "../components/Featured Projects/FeaturedProjects";
import OurProcessWork from "../components/OurProcessWork/OurProcessWork";
import { Row } from "../Globalstyles";
import Process from "../components/Process/Process";
import TestimonialSlider from "../components/Reviews/TestimonialSlider";
import MarqueeSlider from "../components/Test";
import TeamSection from "../components/Meet Our Top-Notch Experts";
import Test from "../components/Test";

function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedProjects />
      <Process />
      <TestimonialSlider />
      <TeamSection/>
      <Test/>
      
    </>
  );
}

export default Home;
