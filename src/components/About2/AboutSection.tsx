"use client";
import React from "react";
import styled from "styled-components";
import StatisticCard from "./StatisticCard";
import ImageColumn from "./ImageColumn";
import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <Container>
      <SectionHeader
        subtitle="ABOUT"
        title="We are the best interior design studio in london"
        description="Posuere urna nec tincidunt praesent. Egestas maecenas pharetra convallis posuere. Ipsum nunc aliquet bibendum enim. Sem integer vitae justo eget magna fermentum iaculis eu non."
      />

      <GridContainer>
        <ImageColumn
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d44868e354da6c8839d1ef9a56a4fff0b8f8857bd277a14a747d2ef430277855?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt="Interior design showcase 1"
        />

        <ImageColumn
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36cb3c7589c840dfd277ae67e3a44a632c7d250d8c7a4ebf7ea714624c6284ff?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt="Interior design showcase 2"
        />

        <StatisticsColumn>
          <StatisticImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10d9ad4b8523be9d8b95207016c36e8d73c15d7b4b3822d75fde00f4de53c3f9?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
            alt="Projects statistics"
          />
          <StatisticCard
            number="2K+"
            label="PROJECTS DONE"
            className="projects-stat"
          />
          <StatisticCard
            number="20+"
            label="PRO TEAMS"
            className="teams-stat"
          />
        </StatisticsColumn>

        <FinalColumn>
          <LearnMoreContainer>
            <LearnMoreButton>LEARN ABOUT</LearnMoreButton>
            <StatisticCard
              number="300+"
              label="GLOBAL CLIENTS"
              className="clients-stat"
            />
          </LearnMoreContainer>
        </FinalColumn>
      </GridContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const GridContainer = styled.div`
  margin-top: 75px;
  width: 100%;
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    margin-top: 40px;
  }
`;

const StatisticsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 20px;
  font-family: Kanit, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 23px;
  }
`;

const StatisticImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 100%;
  border-radius: 0px 50px 0px 0px;
`;

const FinalColumn = styled.div`
  width: 25%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const LearnMoreContainer = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  font-family: Kanit, -apple-system, Roboto, Helvetica, sans-serif;
  margin-bottom: 66px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LearnMoreButton = styled.button`
  border-radius: 100px;
  background-color: transparent;
  border: 1px solid rgba(109, 125, 125, 1);
  padding: 8px 27px;
  color: rgba(102, 161, 9, 1);
  font-size: 16px;
  letter-spacing: 6.88px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(102, 161, 9, 0.1);
  }

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default AboutSection;
