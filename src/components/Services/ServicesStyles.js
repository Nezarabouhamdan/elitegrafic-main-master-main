import { motion } from "framer-motion";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  > div {
    margin: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > div {
      width: 90%;
    }
  }
`;

export const PricingCard = styled(motion.div)`
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

export const PricingCardInfo = styled.div`
  background: #ffff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  text-decoration: none;
  border-radius: 4px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
  color: #333333;
  margin: 0px;
  > button {
    margin-top: auto;

    &:hover {
      color: black;
      background: white;
      transition: background 0.3s ease;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 26px;
  color: #f45c2c;
`;

export const PricingCardCost = styled.h4`
  font-size: 15px;
  margin-top: 20px;
`;

export const PricingCardText = styled.p`
  font-size: 1.1rem;
  margin: 0.4rem 0 1.3rem;

  color: black;
`;

export const PricingCardFeatures = styled.ul`
  margin: 30px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;

  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 1rem;
  display: flex;

  font-size: 13px;

  &:before {
    content: "▪️
	";
    margin-right: 0.4rem;
  }
`;
