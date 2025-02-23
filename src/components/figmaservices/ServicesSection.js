"use client";
import styled from "styled-components";
import { HeroSection } from "./HeroSection";
import { ServiceCard } from "./ServiceCard";

const ServicesSection = () => {
  return (
    <MainWrapper>
      <HeroSection />
      <ServicesGrid>
        <ServicesContainer>
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/076476c471d7f747400ffec1a2c40467ddb2f9a4bdb0ab511a8a149669a3ac2d?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
            title="Interior Planing"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         

          />
          <ServiceCard                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/076476c471d7f747400ffec1a2c40467ddb2f9a4bdb0ab511a8a149669a3ac2d?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"

            title="Architecture"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         
          />
          <ServiceCard
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/076476c471d7f747400ffec1a2c40467ddb2f9a4bdb0ab511a8a149669a3ac2d?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"

            title="Exterior"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         
          />
        </ServicesContainer>
      </ServicesGrid>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ServicesGrid = styled.section`
  align-self: center;
  margin-top: 100px;
  width: 100%;
  max-width: 1275px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ServicesContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export default ServicesSection;
