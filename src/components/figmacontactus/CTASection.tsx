"use client";

import * as React from "react";
import styled from "styled-components";
import { CTAButton } from "./CTAButton";

const Section = styled.section`
  overflow: hidden;
  font-family: Inconsolata, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(61, 61, 61, 1);
  font-weight: 700;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 400px;
  width: 100%;
  padding: 78px 80px;
  align-items: start;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 78px 20px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Heading = styled.h2`
  position: relative;
  font-size: 40px;
  font-family: Raleway, -apple-system, Roboto, Helvetica, sans-serif;
  line-height: 54px;
  letter-spacing: 0.8px;
  width: 482px;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 25px 0;
  width: 533px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default function CTASection() {
  return (
    <Section aria-label="Consultation Call to Action">
      <ContentWrapper>
        <BackgroundImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/565cb7a16b3f34e9afafc73f90749eefdebc4878e928ec73ea69f525e88c9ea1?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt=""
          aria-hidden="true"
        />
        <Heading>Have A Question ? Start Consultation Now</Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          dui tellus commodo convallis.
        </Description>
        <CTAButton>CONTACT US</CTAButton>
      </ContentWrapper>
    </Section>
  );
}
