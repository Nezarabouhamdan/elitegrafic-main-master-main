import styled, { keyframes } from 'styled-components';

// 1) Define the keyframes
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(90px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  padding: 70px 0;
  background-color: rgb(255, 255, 255);
  margin-top: -100px;
  border-top-left-radius: 40px 40px;
  border-top-right-radius: 40px 40px;
  transition: opacity 0.6s ease, transform 0.6s ease;
  
  /* Optional: If you want the entire section to fade in when it comes into view */
  opacity: 1;
  transform: translateY(30px);

`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Title = styled.div`
  margin-bottom: 70px;
  text-align: center;
  h2 {
    font-size: 45px;
    margin: 0;
    font-family: 'Inter';
  }
`;

export const NavPills = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-right: 10px;
    margin-bottom: 15px;
  }
  button {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 50px;
    transition: background 0.3s;
    &:hover,
    &.active {
      background: #66a109;
      color: #fff;
    }
  }
`;

// 2) Apply the keyframes in ProjectCard
export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 20px;
  height: 70vh;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transform: translateY(90px);
  animation: ${fadeInUp} 1s ease forwards;
  &:nth-child(odd) {
    animation-delay: 0.4s;
  }
  &:nth-child(even) {
    animation-delay: 0.8s;
  }
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  &:hover {
    transform: scale(1.05) rotate(0.5deg);
    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  object-fit: fill;
`;

export const ProjectInfo = styled.div`
  padding: 15px;
  .tags a {
    margin-right: 5px;
    font-size: 14px;
    color: #66a109;
    text-decoration: none;
  }
  h3 {
    font-size: 20px;
    margin: 0 0 10px;
  }
  div {
    font-size: 14px;
    color: #666;
  }
`;
