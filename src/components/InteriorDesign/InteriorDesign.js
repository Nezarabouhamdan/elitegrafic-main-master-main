"use client";
import * as React from "react";
import styled from "styled-components";
import { StatItem } from "./StatItem";
import { ImageSection } from "./ImageSection";

const InteriorDesign = ({data}) => {
  return (
    <MainContainer>
      <ContentSection>
        <Title> 
          {data[0].title}
           </Title>
        <Description>
        {data[0].description}

        </Description>
        <StartProjectButton
          onClick={() => console.log("Start Project clicked")}
          role="button"
          tabIndex={0}
        >
          Start Project
        </StartProjectButton>
        <StatsContainer>
          <StatItem number="400+" label="Project Complete" />
          <StatItem number="600+" label="Satisfied Clients" />
          <StatItem number="100+" label="Unique Styles" />
        </StatsContainer>
      </ContentSection>
      <ImageSection images={data[0].images} />
      </MainContainer>
  );
};

const MainContainer = styled.main`
  max-width: 1218px;
  margin: 0 auto;
  padding: 75px 0;
  position: abosolute;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 80px 20px;
  }
`;

const ContentSection = styled.section`
  width: 760px;
  padding-left: 8px;
  @media (max-width: 991px) {
    width: 95vw;

   
  }
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 65px;
  font-weight: 800;
  line-height:70px;
  color: #000;
  margin: 0 0 42px 0;
  @media (max-width: 991px) {
    font-size: 80px;
    margin-bottom: 30px;
  }
  @media (max-width: 640px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-family: "Inter", sans-serif;

  font-size: 16px;
  font-weight: 400;
  color: #545454;
  line-height: 175%;
  margin: 70px 0 102px 0;
  max-width: 559px;
  @media (max-width: 991px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const StartProjectButton = styled.div`
  width: 180px;
  height: 60px;
  border-radius: 10px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 129px;
  background-color: #66a109;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #558908;
  }

  &:focus {
    outline: 2px solid #558908;
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    width: 250px;
    height: 70px;
    font-size: 20px;
    margin-bottom: 60px;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 60px;
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 991px) {
    justify-content: space-around;
    gap: 40px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export default InteriorDesign;
