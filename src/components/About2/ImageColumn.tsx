import React from "react";
import styled from "styled-components";

interface ImageColumnProps {
  src: string;
  alt: string;
}

const ImageColumn: React.FC<ImageColumnProps> = ({ src, alt }) => {
  return (
    <Column>
      <StyledImage loading="lazy" src={src} alt={alt} />
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 25%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  aspect-ratio: 0.55;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 23px;
  }
`;

export default ImageColumn;
