"use client";
import * as React from "react";
import styled from "styled-components";

const ProcessImages = () => {
  return (
    <ImageContainer>
      <ImageGrid>
        <FirstColumn>
          <FirstImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/886846e4e21ea2a9cffc8c5b777c249b5ae8a99a44c91588602e6968f03b73de?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
            alt="Process illustration 1"
          />
        </FirstColumn>
        <SecondColumn>
          <SecondImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86b4738b6e5b49e1406a4b04998cc5ab5c4b21515da18ee82908f05ec98d88c9?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
            alt="Process illustration 2"
          />
        </SecondColumn>
        <ThirdColumn>
          <ThirdImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/260e6fc6ed5463fe3635e9f801f3c3af1f1ea4c88aa6904184d8b2300546e26b?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
            alt="Process illustration 3"
          />
        </ThirdColumn>
      </ImageGrid>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  align-self: stretch;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 690px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageGrid = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 38%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FirstImage = styled.img`
  aspect-ratio: 0.39;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 11px;
  }
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 20%;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SecondImage = styled.img`
  aspect-ratio: 0.26;
  object-fit: contain;
  object-position: center;
  width: 135px;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
  max-width: 100%;
  align-self: stretch;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 42%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ThirdImage = styled.img`
  aspect-ratio: 0.39;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 11px;
  }
`;

export default ProcessImages;
