"use client";

import * as React from "react";
import styled from "styled-components";



const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  z-index:1;
  border-radius: 20px;
  background-color: rgba(102, 161, 9, 1);
  padding: 11px 25px;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.36px;
  font-weight: 700;
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

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ButtonText = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const ButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
`;

export const CTAButton = ({ children, onClick }) => {
  return (
    <StyledButton  aria-label="Contact us">
      <ButtonText>{children}</ButtonText>
      <ButtonIcon
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db98ceeb93fa8fe08fe5ecdbfa924a2b80fbc4555d9dfb5e1b35fc239e9f5393?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
        alt=""
        aria-hidden="true"
      />
    </StyledButton>
  );
};
