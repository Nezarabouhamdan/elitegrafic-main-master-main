"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/pool.jpeg";
import img2 from "../../assets/interior.jpg";
import img3 from "../../assets/villa.jpeg";
import { Button, Row } from "../../Globalstyles";

// Define breakpoints for responsive design
const breakpoints = {
  xs: 0, // Extra small devices (phones)
  sm: 600, // Small devices (tablets)
  md: 960, // Medium devices (small laptops)
  lg: 1280, // Large devices (desktops)
};

// Styled-components for Slider and its elements
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

  .slick-prev,
  .slick-next {
    z-index: 2;
    width: 50px;
    height: 50px;
    &:before {
      font-size: 50px;
      color: #fff;
    }
  }

  .slick-dots {
    bottom: 20px;
  }
`;

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
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Counter = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 24px;
  z-index: 2;
`;

// Responsive typography and layout adjustments
const Title = styled.h1`
  font-family: "Inter", sans-serif;
  text-align: left;
  width: 100%;
  font-size: 200px;
  margin-top: 430px;
  margin-right: 160px;

  @media (max-width: ${breakpoints.lg}px) {
    font-size: 150px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 120px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 100px;
  }

  @media (max-width: ${breakpoints.xs}px) {
    font-size: 80px;
  }
`;

const Subtitle = styled.h5`
  text-align: left;
  font-family: "Inter ExtraLight", sans-serif;
  font-size: 30px;
  margin-top: 20px;

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

const Paragraph = styled.p`
  font-family: "Inter ExtraLight", sans-serif;
  font-size: 17px;
  text-align: left;
  margin-top: 20px;

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
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      id: 1,
      image: img3,
      title: "archin",
      subtitle: "Architecture Design Studio",
      content:
        "We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices",
    },
    {
      id: 2,
      image: img2,
      title: "time",
      subtitle: "Sustainable Material Resource",
      content:
        "We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices",
    },
    {
      id: 3,
      image: img,
      title: "shape",
      subtitle: "Architecture Language Signature",
      content:
        "We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices",
    },
  ];

  return (
    <SliderWrapper>
      <Counter>
        {currentSlide + 1} / {slides.length}
      </Counter>
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
                  <Column style={{ marginTop: "430px", marginRight: "160px" }}>
                    <div
                      style={{
                        fontFamily: "Inter",
                        fontSize: "200px",
                        textAlign: "left",
                        width: "800px",
                        height: "200px",
                      }}
                    >
                      {" "}
                      <h1
                        style={{
                          fontFamily: "Inter",
                          fontSize: "200px",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {" "}
                        {slide.title}
                      </h1>
                    </div>

                    <h5
                      style={{
                        textAlign: "left",
                        fontFamily: "Inter ExtraLight",
                        fontSize: "30px",
                      }}
                    >
                      {slide.subtitle}
                    </h5>
                  </Column>
                  <Column
                    style={{
                      backgroundColor: "none",
                      width: "400px",
                      marginRight: "-100px",
                      marginTop: "430px",
                      height: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter ExtraLight",
                        fontSize: "17px",
                        textAlign: "left",
                      }}
                    >
                      {slide.content}
                    </p>
                    <Button
                      style={{
                        padding: "15px 40px",
                        position: "relative",
                        marginTop: "60px",
                        borderRadius: "50rem",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      Our Services
                    </Button>
                  </Column>
                </Row>
              </SlideContent>
            </AnimatedSlideContent>
          </div>
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
};

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "25px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "25px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default HeroSlider;
