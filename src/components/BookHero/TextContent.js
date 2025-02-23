"use client";
import * as React from "react";
import styled from "styled-components";
import { CallToAction } from "./CallToAction";

export const TextContent = () => {
  return (
    <ContentContainer>
      <Heading>Aliquam a dui vel justo fringilla euismod id id enim.</Heading>
      <Description>
      Aliquam a dui vel justo fringilla euismod id id enim.Aliquam a dui vel
        justo fringilla euismod id id enim.Aliquam a dui vel justo fringilla
        euismod id id enim. Aliquam a dui vel justo fringilla euismod id id enim.Aliquam a dui vel
        justo fringilla euismod id id enim.Aliquam a dui vel justo fringilla
        euismod id id enim.    Aliquam a dui vel
        justo fringilla euismod id id enim.Aliquam a dui vel justo fringilla
        euismod id id enim.    Aliquam a dui vel
        justo fringilla euismod id id enim.Aliquam a dui vel justo fringilla
        euismod id id enim.    
      </Description>
      <CallToAction />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  margin-top: 100px;

  width: 100%;
  flex-direction: column;
  align-self: stretch;
  align-items: start;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  margin-left: 40px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Heading = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 37px;
  font-weight: 900;
  line-height: 71px;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  color:grey;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  margin-top: 24px;
  width: 80%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
