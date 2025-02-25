import React from "react";
import HeroSlider from "../components/Slider/Slider";
import FeaturedProjects from "../components/Featured Projects/FeaturedProjects";
import Process from "../components/Process/Process";
import TestimonialSlider from "../components/Reviews/TestimonialSlider";
import TeamSection from "../components/Meet Our Top-Notch Experts";
import Test from "../components/Test";
import CTASection from "../components/figmacontactus/CTASection";
import BespokeDesign from "../components/figma3/BespokeDesign";


function Home() {
  return (
    <>
      <HeroSlider />
      <Test/>
      <FeaturedProjects />
      <Process />
      <BespokeDesign/>
      <TestimonialSlider />
      <TeamSection/>
 
<CTASection/>

    </>
  );
}

export default Home;
