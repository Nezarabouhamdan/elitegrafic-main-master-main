"use client";
import * as React from "react";
import styled from "styled-components";
import { TextContent } from "./TextContent";
import { ImageSection } from "./ImageSection";

const LandingSection = () => {
  return (
    <Section>
      <ContentWrapper>
        <LeftColumn>
          <TextContent />
        </LeftColumn>
        <RightColumn>
          <ImageSection />
        </RightColumn>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  gap: 200px;
  display: flex;
justify-content: center;
align-content:space-between;
align-content :space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 40%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 40%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default LandingSection;
