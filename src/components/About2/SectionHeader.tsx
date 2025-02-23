import React from "react";
import styled from "styled-components";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const Subtitle = styled.span`
  color: rgba(109, 125, 125, 1);
  font-size: 16px;
  font-family: Kanit, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 6.88px;
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 40px;
  font-family: Kanit, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-family: Nunito, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  width: 513px;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default SectionHeader;
