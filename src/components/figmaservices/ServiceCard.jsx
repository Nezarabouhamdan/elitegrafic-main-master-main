"use client";
import styled from "styled-components";


export const ServiceCard = ({
  icon,
  title,
  description,
  marginTop = 0,
}) => {
  return (
    <ServiceCardWrapper marginTop={marginTop}>
      {icon && (
        <ServiceIcon loading="lazy" src={icon} alt={`${title} service icon`} />
      )}
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </ServiceCardWrapper>
  );
};

const ServiceCardWrapper = styled.article`
  display: flex;
  margin-top: ${(props) => props.marginTop}px;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
  text-align: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ServiceIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 72px;
`;

const ServiceTitle = styled.h2`
  color: rgba(32, 31, 29, 1);
  font-size: 33px;
  font-weight: 600;
  line-height: 1;
  margin-top: 32px;
`;

const ServiceDescription = styled.p`
  color: rgba(79, 79, 79, 1);
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
  margin-top: 21px;
`;
