"use client";
import * as React from "react";
import styled from "styled-components";
import ProcessImages from "./ProcessImages";
import ProcessContent from "./ProcessContent";

const ProcessSection = () => {
  return (
    <section>
      <Container>
        <ContentWrapper>
          <ProcessImages />
          <ProcessContent />
        </ContentWrapper>
      </Container>
    </section>
  );
};

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  width: 100%;
  padding: 152px 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: -30px;
  align-items: center;
  gap: 40px 87px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

export default ProcessSection;
