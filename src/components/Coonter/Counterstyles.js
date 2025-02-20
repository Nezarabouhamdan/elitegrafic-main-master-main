import { motion } from "framer-motion";
import styled from "styled-components";
export const Row = styled(motion.div)`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (max-width: 968px) {
    height: 30vh;
  }
`;
export const Item = styled.div`
  width: 22vw;
  z-index: 1;
  height: 50vh;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
    height: 30vh;
  }
`;

export const Number = styled.h1`
  font-size: 75px;
  color: #f45c2c;
  @media screen and (max-width: 968px) {
    font-size: 35px;
  }
`;

export const Desc = styled.h2`
  font-size: 25px;
  color: black;
  @media screen and (max-width: 968px) {
    font-size: 15px;
  }
`;
