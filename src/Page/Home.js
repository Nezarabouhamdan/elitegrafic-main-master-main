import React from "react";
import HeroSlider from "../components/Slider/Slider";
import FeaturedProjects from "../components/Featured Projects/FeaturedProjects";
import Process from "../components/Process/Process";
import TestimonialSlider from "../components/Reviews/TestimonialSlider";
import TeamSection from "../components/Meet Our Experts/Meet Our Top-Notch Experts";
import CTASection from "../components/Homecontact/CTASection";
import BespokeDesign from "../components/Bespoke/BespokeDesign";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest, FaShoppingCart } from "react-icons/fa";
import { Icon, LeftIcons,RightIcons } from "./ServicesPage";


function Home() {
  return (
    <>
      <HeroSlider />
         <LeftIcons>
              <Icon href="https://www.facebook.com/Khales.ae/" target="_blank">
                <FaFacebook />
              </Icon>
              <Icon href="https://www.pinterest.com/khalesae/" target="_blank">
                <FaPinterest />
              </Icon>
              <Icon href="https://www.linkedin.com/company/khales-ae/posts/?feedView=all" target="_blank">
                <FaLinkedin />
              </Icon>
              <Icon href="https://www.instagram.com/khales.ae/" target="_blank">
                <FaInstagram />
              </Icon>
            </LeftIcons>
            <RightIcons>
              <Icon href="https://facebook.com" target="_blank">
          <FaShoppingCart />
              </Icon>
              <Icon href="https://twitter.com" target="_blank">
                <FaTwitter />
              </Icon>
              <Icon href="https://linkedin.com" target="_blank">
                <FaLinkedin />
              </Icon>
              <Icon href="https://instagram.com" target="_blank">
                <FaInstagram />
              </Icon>
            </RightIcons>
    
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
