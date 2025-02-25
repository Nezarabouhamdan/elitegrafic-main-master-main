"use client";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Header>
      <BackgroundImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95cf67476a84c3e16333959dad43163acec7fbd3119b4969fbb86f02c69e2f12?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
        alt="Modern home interior"
      />
      <ContentWrapper>
        <MainHeading>Simplifying the Path to Your Perfect Home</MainHeading>
        <SubHeading>
          Explore a Range of Modern Homes Tailored to Your Needs, Backed by Our
          Expert Guidance Every Step of the Way
        </SubHeading>
        <ExploreButton role="button">Explore Now</ExploreButton>
      </ContentWrapper>
    </Header>
  );
};

const Header = styled.header`
  position: relative;
  width: 787px;
  max-width: 100%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  color: #141414;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 50px;
  }
`;

const SubHeading = styled.p`
  color: #434343;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-top: 12px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ExploreButton = styled.button`
  border-radius: 99px;
  background-color: rgba(102, 161, 9, 1);
  margin-top: 27px;
  min-height: 52px;
  width: 154px;
  max-width: 100%;
  padding: 11px 16px;
  font-family: Radio Canada Big, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(92, 145, 8, 1);
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

export default HeroSection;
