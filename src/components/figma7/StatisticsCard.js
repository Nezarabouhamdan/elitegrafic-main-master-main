"use client";
import styled from "styled-components";
import StatisticItem from "./StatisticItem";

const StatisticsCard = () => {
  return (
    <Wrapper>
      <CardBackground>
        <Dividers>
          <Divider />
          <Divider />
          <Divider />
        </Dividers>
      </CardBackground>
      <StatsContainer>
        <StatisticItem value="5000+" label="Luxuary House" />
        <StatisticItem value="500+" label="Reliable Agents" />
        <StatisticItem value="5000+" label="Happy Customers" />
        <StatisticItem value="50+" label="Awards" />
      </StatsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  align-self: center;
  margin-top: 484px;
  min-height: 92px;
  width: 894px;
  max-width: 100%;
  padding: 18px 63px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 18px 20px;
  }
`;

const CardBackground = styled.div`
  border-radius: 24px;
  border: 1px solid var(--Neutral-Gray-Dark, #2c2c2c);
  opacity: 0.7;
  backdrop-filter: blur(22px);
  background-color: #1e1e1e;
  position: absolute;
  z-index: 0;
  display: flex;
  width: 894px;
  max-width: 894px;
  padding: 27px 70px;
  flex-direction: column;
  overflow: hidden;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  height: 92px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 27px 20px;
  }
`;

const Dividers = styled.div`
  display: flex;
  margin-left: 13px;
  width: 465px;
  max-width: 100%;
  align-items: stretch;
  gap: 20px;
  justify-content: space-between;
`;

const Divider = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  width: 1px;
  flex-shrink: 0;
  height: 38px;
`;

const StatsContainer = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  color: #fff;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default StatisticsCard;
