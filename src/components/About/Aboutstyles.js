import { motion } from "framer-motion";
import styled from "styled-components";
export const About = styled.div`
  height: 80vh;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 968px) {
    width: 100%;
    height: 100vh;
  }
`;
export const Aboutimg = styled(motion.img)`
  height: 60vh;
  width: 80%;
  @media screen and (max-width: 968px) {
    height: 50vh;
    width: 80%;
  }
`;
export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direcation: Row;
  justify-content: center;
  gap: 40px;
  @media screen and (max-width: 968px) {
    flex-direction: column;
    gap: 0px;

    height: 100vh;
  }
`;
export const Hint = styled(motion.div)`
  margin-top: 20%;
  font-size: 16px;
  color: #f45c2c;
  margin-right: 80%;
  font-family: "Mulish";
  float: left;
  @media screen and (max-width: 968px) {
    margin-top: 5%;
    margin-right: 60%;
    font-size: 20px;
  }
`;
export const Head = styled(motion.div)`
  font-size: 30px;
  margin-top: 10px;
  color: #333333;

  font-family: "Bebas Neue";
  float: left;
  @media screen and (max-width: 968px) {
    margin-left: 5%;
  }
`;
export const Desc = styled(motion.div)`
  margin-top: 10px;
  margin-bottom: 50px;

  font-size: 14px;
  color: #828282;
  font-family: "Mulish";
  float: left;
  @media screen and (max-width: 968px) {
    margin-top: 5%;
    margin-bottom: 0px;
    margin-left: 5%;
  }
`;
