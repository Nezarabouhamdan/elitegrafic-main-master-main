import React from 'react';
import styled from 'styled-components';
import manImage from '../assets/istockphoto-1494356205-612x612__1_-removebg-preview.png';        // Replace with your man image
import wireframeImage from '../assets/gdl_air_systems_cover.png'; // Replace with your wireframe image

// The overall container
const Section = styled.section`
  display: flex;
  width: 100%;
  min-height: 50vh;
  font-family: 'Inter', sans-serif;
  @media (max-width: 992px) {
    flex-direction: column; /* Stack columns on smaller screens */
  }
`;

// Left half with text
const LeftColumn = styled.div`
display:flex;
margin-left:50px;
flex-direction:row;
align-content:flex-start;
align-items:left;
justify-content: left;
  width: 50%;
  background-color: #fff;
  @media (max-width: 992px) {
    width: 100%;
    min-height: 60vh; /* Enough space for images/stats on smaller screens */
  }
`;

// A thin vertical line dividing the two columns
const Divider = styled.div`
  width: 1px;
  background-color: #ddd;
  @media (max-width: 992px) {
    display: none; /* Hide the divider on smaller screens */
  }
`;

// Right half with images & stats
const RightColumn = styled.div`
display:flex;
flex-direction:row;
align-content:flex-start;
align-items:left;
justify-content: left;
  width: 50%;

  background-color: #fff;
  @media (max-width: 992px) {
    width: 100%;
    min-height: 60vh; /* Enough space for images/stats on smaller screens */
  }
`;

// Wireframe image behind
const Wireframe = styled.img`
  margin-left:-0;
  top: 0;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
  @media (max-width: 992px) {
    height: auto;
    width: 100%;
    opacity: 0.2; /* Make it more subtle on small screens */
  }
`;

// Man image overlapping
const ManImage = styled.img`
  right: 0; 
  bottom: 0;
  height: 100%;
  object-fit: cover;

  /* If you want to show half the man:
     you can shift him left with a negative margin or transform. 
     Example: transform: translateX(20%); */

  @media (max-width: 992px) {
    position: static;
    width: 100%;
    height: auto;
    transform: none;
  }
`;

// Stats container (We Stand For)
const StatsContainer = styled.div`
display:flex;
flex-direction:column;
align-content:flex-start;
align-items:left;
justify-content: left;
  top: 20%;
  left: 10%;
  z-index: 2;
  color: #66a109; /* brand color for text */
  @media (max-width: 992px) {
    position: static;
    margin-top: 20px;
    padding: 0 20px;
  }
`;

const StatsTitle = styled.h4`
  margin-bottom: 1rem;  margin-top: 1rem;

  color: #666; /* "We Stand For" text color */
`;

const StatItem = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    margin: 0;
    font-size: 1.8rem;
  }
  span {
    display: block;
    font-size: 0.9rem;
    color: #333;
    margin-top: 4px;
  }
`;

// Title for "About Us"
const Title = styled.h2`
  font-size: 2rem;
  color: #66a109;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-transform: uppercase;
  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

// Paragraph text
const Paragraph = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 1rem;
`;

// Bullet list
const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.2rem 0;
`;

const BulletItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  color: #333;
  &:before {
    content: '•';
    left: 0;
    color: #66a109;
  }
`;

const ProfileSection = () => {
  return (
    <Section>
      {/* Left Side */}
      <LeftColumn><StatsContainer>
        <Title>ABOUT US</Title>
         <Paragraph>
          Based in the fertile gulf of innovation and excellence, Khales Group
          has over 10 years of experience with ongoing and existing projects in
          real estate, general services, and more.
        </Paragraph>
        <Paragraph>
          Beyond expectations, we continuously strive to exceed our clients'
          needs by applying a modern approach to design and development.
        </Paragraph>
        <BulletList>
          <BulletItem>AGILE</BulletItem>
          <BulletItem>EXPERIENCED</BulletItem>
          <BulletItem>COLLABORATIVE</BulletItem>
          <BulletItem>RELIABLE</BulletItem>
        </BulletList>     </StatsContainer>
          <ManImage src={manImage} alt="Man" />

      </LeftColumn>

      {/* Divider (hidden on mobile) */}
      <Divider />

      {/* Right Side */}
      <RightColumn>               <Wireframe src={wireframeImage} alt="Wireframe" />
      <StatsContainer>
          <StatsTitle>We Stand For</StatsTitle>
          <StatItem>
            <h3>71% Growth</h3>
            <span>From 2021-2023</span>
          </StatItem>
          <StatItem>
            <h3>100% Success</h3>
            <span>Delivered 50 projects</span>
          </StatItem>
          <StatItem>
            <h3>TRUST</h3>
            <span>Client Relations</span>
          </StatItem>
        </StatsContainer>


      </RightColumn>
    </Section>
  );
};

export default ProfileSection;
