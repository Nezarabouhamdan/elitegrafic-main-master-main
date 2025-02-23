import React from "react";
import styled from "styled-components";

interface StatisticCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  number,
  label,
  className,
}) => {
  return (
    <Container className={className}>
      <Number>{number}</Number>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 40px;
  margin-top: 56px;

  &.projects-stat {
    margin-top: 56px;
  }

  &.teams-stat {
    margin-top: 299px;
  }

  &.clients-stat {
    margin-top: 56px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
    margin-top: 40px;
  }
`;

const Number = styled.div`
  color: rgba(109, 125, 125, 1);
  font-size: 40px;
  font-family: Kanit, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
`;

const Label = styled.div`
  color: rgba(102, 161, 9, 1);
  font-size: 16px;
  font-family: Kanit, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 6.88px;
`;

export default StatisticCard;
