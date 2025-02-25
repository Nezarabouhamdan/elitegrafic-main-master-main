"use client";
import styled from "styled-components";


const StatisticItem = ({ value, label }) => {
  return (
    <StatWrapper>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatWrapper>
  );
};

const StatWrapper = styled.article`
  align-self: stretch;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: center;
  width: 121px;
`;

const StatValue = styled.strong`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: inherit;
`;

const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: inherit;
`;

export default StatisticItem;
