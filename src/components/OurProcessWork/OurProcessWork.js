import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Accordion, Stack } from 'rsuite';
import 'rsuite/Accordion/styles/index.css';
import './animation.css';
import { Button2 } from '../../Globalstyles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AllProjectsLink } from '../Latest Projects/LatestProjectsStyles';

const OurProcessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0 0;
  
  @media (max-width: 968px) {
    width: 100%;
  }
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderNumber = styled.div`
  margin-right: 50px;
  font-family: 'Inter ExtraLight', sans-serif;
  font-weight: 200;
  font-size: 24px;
  line-height: 36px;
  color: rgb(153, 153, 153);
  
  @media (max-width: 968px) {
    margin-right: 20px;
    font-size: 18px;
    line-height: 27px;
  }
`;

const HeaderTitle = styled.div`
  font-family: 'Inter ExtraLight', sans-serif;
  font-weight: 100;
  font-size: 24px;
  line-height: 28.8px;
  color: ${({ isActive }) => (isActive ? '#66a109' : 'black')};
  
  @media (max-width: 968px) {
    font-size: 18px;
    line-height: 21.6px;
  }
`;

const HeaderContainer = styled(Stack)`
  width: 100%;
`;

const PanelContent = styled.div`
  padding: 10px;
  color: grey;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  
  @media (max-width: 968px) {
    font-size: 14px;
  }
`;

const HeaderComponent = ({ isActive, eventKey, title, ...rest }) => (
  <HeaderContainer spacing={10} alignItems="flex-start" direction="row" justifyContent="space-between" {...rest}>
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <HeaderRow>
        <HeaderNumber>{parseInt(eventKey, 10) + 1}/</HeaderNumber>
        <HeaderTitle isActive={isActive}>{title}</HeaderTitle>
      </HeaderRow>
    </Stack>
  </HeaderContainer>
);

// Reusable Accordion component that accepts "panels" as a prop
function OurProcessWork({ panels ,button},) {
  console.log(button)
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (key) => {
    setActiveKey(key === activeKey ? null : key); // Toggle active state
  };

  return (
    <OurProcessWrapper>
      <StyledAccordion activeKey={activeKey} onSelect={handleSelect}>
        {panels.map((panel, index) => (
          <Accordion.Panel
            key={index}
            header={
              <HeaderComponent
                title={panel.title}
                isActive={activeKey === index.toString()}
                eventKey={index.toString()}
              />
            }
            eventKey={index.toString()}
          >
            <CSSTransition
              in={activeKey === index.toString()}
              timeout={1000}
              classNames="fade"
              unmountOnExit
            >
              <PanelContent>{panel.content}</PanelContent>
            </CSSTransition>
          </Accordion.Panel>
        ))}
      </StyledAccordion>
      {button === true &&
      <AllProjectsLink to={'/projects'} style={{marginTop:'50px'}}>Our Projects</AllProjectsLink>
      }
  
    </OurProcessWrapper>
  );
}

export default OurProcessWork;
