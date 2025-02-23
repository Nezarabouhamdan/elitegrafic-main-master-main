"use client";
import styled from "styled-components";

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <ImageColumn>
        <HeroImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d5f13f8ae52d8a7d6aecf6fce3dbad4ad0a3cb0dabe6e85b211808c694b707?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt="Services overview"
        />
      </ImageColumn>
      <ContentColumn>
        <ContentWrapper>
          <MainHeading>Services Provided by us</MainHeading>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Description>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </ContentWrapper>
      </ContentColumn>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 55%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const HeroImage = styled.img`
  aspect-ratio: 1.75;
  object-fit: contain;
  object-position: center;  border-radius:10px;

  width: 90%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 45%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const MainHeading = styled.h1`
  color: rgba(32, 31, 29, 1);
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Description = styled.p`
  color: rgba(79, 79, 79, 1);
  font-weight: 400;
  line-height: 34px;
  margin-top: 30px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LearnMoreButton = styled.button`
  border-radius: 20px;
  background-color: rgba(102, 161, 9, 1);
  align-self: start;
  margin-top: 70px;
  padding: 17px 40px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 40px;
  }
`;
