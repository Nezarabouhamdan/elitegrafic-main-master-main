"use client";
import * as React from "react";
import styled from "styled-components";

const ProcessContent = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <TitleSection>
          <TitleContent>
            <ProcessLabel>The process</ProcessLabel>
            <MainHeading>
              Sneak peek
              <br />
              the first step
              <br />
              into our new.
            </MainHeading>
          </TitleContent>
        </TitleSection>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
          <br />
        </Description>
        <ExploreButton>Explore</ExploreButton>
      </ContentWrapper>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  align-self: stretch;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 400;
  width: 523px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TitleSection = styled.div`
  width: 436px;
  max-width: 100%;
  padding-bottom: 10px;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProcessLabel = styled.span`
  align-self: start;
  gap: 4px;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  color: #66a109;
  text-transform: uppercase;
  letter-spacing: 6.4px;
  line-height: 28px;
`;

const MainHeading = styled.h1`
  color: #141414;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Playfair Display, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 64px;
  line-height: 83px;
  letter-spacing: 2.56px;
  text-transform: capitalize;
  margin-top: 4px;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 57px;
  }
`;

const Description = styled.p`
  color: #595959;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.32px;
  align-self: stretch;
  margin-top: 32px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ExploreButton = styled.button`
  align-self: stretch;
  border: 1px solid var(--A1A1A1-body-Grey-for-black-bg, #a1a1a1);
  margin-top: 32px;
  padding: 8px 32px;
  font-family: Playfair Display, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  color: #141414;
  white-space: nowrap;
  text-transform: capitalize;
  letter-spacing: 1.28px;
  line-height: 28px;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(20, 20, 20, 0.05);
  }

  &:focus {
    outline: 2px solid #66a109;
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    padding: 8px 20px;
    white-space: initial;
  }
`;

export default ProcessContent;
