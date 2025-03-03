import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest, FaCartArrowDown, FaShoppingCart } from "react-icons/fa";
import {
  Herosection,
  Heroimg,
  Textdiv,
  Head2,
  Underline,
  Head3,
  Underlinev,
} from "../components/Hero/Herostyles";
import img from "../assets/Services.jpg";
import styled from "styled-components";
import ServicesSection from "../components/Ourservices/ServicesSection";
import RotatingTextCircle from "../components/Ourservices/RotatingTextCircle";
import AboutSection from "../ss";
import ProcesSection from "../components/Steps/ProcessSection";
import useDeviceSize from "./WindowSize";

// Column Styles
const Column = styled.div`
  flex: 1;
  display: flex;
 justify-content: left;
  align-items: center;
  @media (max-width: 768px) {
    width: 85vw;

    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Row = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-around;
  align-items: space-around;
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
  }
`;

// Heading Styles
const Headings = styled.h2`
 font-size: 1.8rem;
  font-family:'Inter ExtraLight';
  color: #fff;

  .green {
    color: rgb(255, 255, 255);
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;const Heading = styled.h2`
 
font-size: 7rem;
color: #fff;

.green {
  color: rgb(255, 255, 255);
}
@media (max-width: 768px) {
  font-size: 1rem;
}
`;

// Social Media Icon Styles
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: row;
  align-items: center;
  justify-content: center;
    top: 90%;
  }
`;

export const LeftIcons = styled(IconWrapper)`
  left: 50px;
    @media (max-width: 768px) {
      left: 22vw;

     top: 100px;
  }
`;

export const RightIcons = styled(IconWrapper)`
  right: 50px;
    @media (max-width: 768px) {
      right: 22vw;

     bottom: 50px;
  }
`;

export const Icon = styled.a`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 10px;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66a109;
  }
`;

function ServicesPage() {
  return (
    <div>
      <Herosection>
        <Heroimg src='https://i.ibb.co/dsWKjZxp/Services.jpg' />
        <Textdiv style={{ marginTop: "00px" }}>
          <Row style={{marginTop:'100px'}}>
            <Column>
              <Headings>
           
                  One-Stop Solution for <br></br>
                <Underline
                  style={{ marginTop: "7px", marginBottom: "7px" }}
                ></Underline>
                Contemporary &amp; Functionality in Life
              </Headings>
            </Column>
            <RotatingTextCircle  />
          </Row>
          {useDeviceSize()[0]>'770'?<><Column>
       
            <Heading>
                Our 
              </Heading>          
              
            </Column> <Column style={{marginTop:'100px'}}>
                   <Heading>
              Services 
              </Heading>

              
            </Column></>:<> 
        </>}
      
        </Textdiv>
      </Herosection>
      <AboutSection/>
      <ServicesSection />
      <ProcesSection/>

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
    </div>
  );
}

export default ServicesPage;
