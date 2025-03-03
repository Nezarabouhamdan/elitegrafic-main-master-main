"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from "../../Globalstyles";
import { Link } from "react-router-dom";
import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import useDeviceSize from "../../Page/WindowSize";

const breakpoints = {
  xs: 0, 
  sm: 600, 
  md: 960, 
  lg: 1280, 
};

const Row=styled.div` 
 display: flex;
  flex-direction:row;
  justify-content: center; 
  align-content: flex-start;
  align-items:  flex-start;
  width:80vw;
   @media screen and (max-width: 968px) {
     flex-direction:column;
  }   @media screen and (max-width: 1200px) {
  justify-content: center; 
  } ;`
const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: black;
  height: 100vh;
`;

const creativeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.8) rotate(-10deg);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
`;

const AnimatedSlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 1;
  animation: ${creativeIn} 1s ease-out;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    position: relative;
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }



  .slick-dots {
    bottom: 20px;
  }
`;
const ContentColumn=styled.div`
                  
   
                      margin-right: -100px;
          margin-top: 30%;
                      height: 100%;
              width: 20vw;
@media (max-width: 1200px) {
                      margin-right: 0px;

              width: 30vw;
  }
                        @media screen and (max-width: 968px) {
                                              margin-right: 00px;

                       width: 70vw;
  overflow-wrap: break-word; 
  word-wrap: break-word; 

                        display:flex;
                        flex-direction:column;
                        justify-content:flex-start;
                        align-items:flex-start;
                        align-content:flex-start;
                                              margin-top: 00px;

   
  } 
                      `
const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 1;
`;

const SlideImage = styled.img`
  width: 100vw;
  object-fit: fill;
      @media (max-width: 968px) {
        object-fit: cover;

    width: 100%;
    height: 230vw;
 
  }
      @media (max-width: 968px) {
        object-fit: cover;

    width: 100%;
    height: 230vw;
 
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
              width: 55vw;
          margin-top:30%;
   @media (max-width: 1200px) {
    width: 40vw;
    margin-right: 00px;
  }
      @media (max-width: 968px) {
          width: 100vw;

        margin-top: 0px;
    margin-right: 0;
  }
`;

const Counter = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 24px;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  text-align: left;
  width: 100%;
  font-size: 200px;
  margin-top: 0px;
  margin-right: 160px;

  @media (max-width: ${breakpoints.lg}px) {
  margin-right: 0px;

    font-size: 100px;
  }

  @media (max-width: ${breakpoints.md}px) {
    text-align: center;
  margin-top: 50px;
  margin-right: 0px;
    font-size: 70px;
  }

  @media (max-width: ${breakpoints.sm}px) {  margin-top: 150px;
  margin-right: 0px;
      text-align: left;

    font-size: 50px;
  }

  @media (max-width: ${breakpoints.xs}px) {  margin-top: 50px;
  margin-right: 0px;
      text-align: center;

    font-size: 30px;
  }
`;

const Subtitle = styled.h5`
  text-align: left;
  font-family: "Inter ExtraLight", sans-serif;
  font-size: 30px;
  margin-top: 0px;

  @media (max-width: ${breakpoints.lg}px) {
    font-size: 25px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.xs}px) {
    font-size: 16px;
  }
`;
const TextContianer=styled.div`  font-family: "Inter";
                        text-align: left;
                        width: 700px;
                        height: 200px;
                        @media (max-width: 968px) {
     width: 100%;
                        `
const Paragraph = styled.p`
  font-family: "Inter ExtraLight", sans-serif;
  font-size: 17px;
  text-align: left;
  margin-top: 20px;
            white-space: pre-wrap;

  @media (max-width: ${breakpoints.lg}px) {
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.xs}px) {
    font-size: 11px;
  }


`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),

  };

  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co/vG6yCkC/pool-min.jpg',
      title: "archin",
      subtitle: "Architecture Design Studio",
      content:
        "We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices",
    },
    {
      id: 2,
      image: 'https://i.ibb.co/DD7YRfGs/img6-min.jpg',
      title: "time",
      subtitle: "Sustainable Material Resource",
      content:
        "We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices",
    },
    {
      id: 3,
      image: 'https://i.ibb.co/ZRdYSptV/interior-min.jpg',
      title: "shape",
      subtitle: "Architecture Language Signature",
      content:
        "We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices",
    },
  ];

  return (
    <SliderWrapper>
      {useDeviceSize()[0]>'770'?   <Counter>
        {currentSlide + 1} / {slides.length}
      </Counter>:''}
   
      <StyledSlider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <SlideImage
              src={slide.image}
              alt={slide.title}
              style={{ filter: "brightness(70%)" }}
            />
            <AnimatedSlideContent key={currentSlide}>
              {" "}
              <SlideContent>
                <Row>
                  <Column >
                    <TextContianer
                   
                    >
                     <Title>                        {slide.title}
                     </Title>
                    </TextContianer>

                    <Subtitle
                     
                    >
                      {slide.subtitle}
                    </Subtitle>
                  </Column>
                  <ContentColumn
               
                  >
                    <Paragraph
                 
                    >
                      {slide.content}
                    </Paragraph>
                  <Link to={'/service'}><Button
                      style={{
                      
                        position: "relative",
                        marginTop: "30px",
                        borderRadius: "50rem",
                        border: "1px solid #dee2e6",
                        
                      }}
                      
                    >
                      Our Services
                    </Button></Link>
                 
                  </ContentColumn>
                </Row>
              </SlideContent>
            </AnimatedSlideContent>
          </div>
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
};

export default HeroSlider;
