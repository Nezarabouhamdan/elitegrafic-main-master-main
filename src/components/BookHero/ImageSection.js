"use client";
import * as React from "react";
import styled from "styled-components";

export const ImageSection = () => {
  return (
    <StyledImage
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e7da2cfb9ac29b8ae35f8de665b7073c164e4a92d218a2751060589e0452c0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
      alt="Decorative section image"
    />
  );
};

const StyledImage = styled.img`
  aspect-ratio: 1.01;
  object-fit: contain;
  object-position: center;
  width: 70%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;
