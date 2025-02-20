import React from 'react';
import styled from 'styled-components';

// Styled components for the layout and design
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Column = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.svg`
  width: 60px;
  height: 60px;
  fill: #bfd362;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  max-width: 350px;
  margin: 0 auto;
`;

const IconImageText = ({ icon, title, description }) => {
  return (
    <Section>
      <Column>
        <IconWrapper>
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.02 156.63">{icon}</Icon>
        </IconWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Column>
    </Section>
  );
};

export default IconImageText;