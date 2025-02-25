import styled from "styled-components";
import HeroSection from "./HeroSection";
import StatisticsCard from "./StatisticsCard";

const VisualHome = () => {
  return (
    <MainContainer>
      <HeroSection />
      <StatisticsCard />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  position: relative;
  min-height: 1046px;
  padding: 87px 80px 52px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }

  @media (max-width: 640px) {
    padding-top: 200px;
    min-height: 846px;
    margin-bottom: 45px;
  }
`;

export default VisualHome;
