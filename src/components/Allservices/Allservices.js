
import React from 'react';
import IconImageText from './s';
import styled from 'styled-components';
import img from '../../assets/government-1-4.jpg'
const Row=styled.div`
width:70%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`;
const Half=styled.div`
height:50%;
width:50%;
`
const Imag=styled.img`
height:100%;
object-fit:contain;
`
const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const ArchitectureDesign = () => {
  const icon = (
    <path
      d="M33.2,25.53h1.65q36.34,0,72.7,0a3.41,3.41,0,0,0,2.65-1.1c7.15-7.15,14.36-14.26,21.53-21.4,1-1,2-1.86,3.49-1.26s1.7,2,1.69,3.47c0,6.12,0,12.25,0,18.37v1.8h5.45V23.67c0-4.58,0-9.16,0-13.74,0-2.41.92-3.24,3.33-3.17,6.66.16,12.75,6.44,13,13.41,0,.37,0,.74,0,1.12q0,45.78,0,91.55A14.25,14.25,0,0,1,148.06,127a16.92,16.92,0,0,1-3.95.45q-62.07,0-124.15,0A14.19,14.19,0,0,1,5.34,112.86q0-45.85,0-91.71A14.06,14.06,0,0,1,19.79,6.75c6.27.14,12.16,5.53,13,12C33,20.91,33.05,23.1,33.2,25.53Zm-.14,5.21V33q0,39.22,0,78.45a8.46,8.46,0,0,1-.25,2.36,2.27,2.27,0,0,1-2.44,1.66A2.32,2.32,0,0,1,28,113.63a8.3,8.3,0,0,1-.25-1.73,8.87,8.87,0,0,0-9.62-8.33c-4.66.5-8.35,5.63-7.63,10.51a9.33,9.33,0,0,0,9.69,8.22q61.83-.14,123.67,0c.53,0,1.06,0,1.59,0a9.1,9.1,0,0,0,8.15-9.1c.12-4.67-3.27-8.93-7.56-9.52-3.51-.47-3.72-.72-3.72-4.33V30.79H136.9v2.15q0,31.56,0,63.11c0,3.56-.66,4.22-4.18,4.22q-45.61,0-91.23,0a10.21,10.21,0,0,1-1.75-.07,2.55,2.55,0,0,1-1.59-4.33c.31-.37.67-.68,1-1q31.67-31.38,63.32-62.77c.38-.38.74-.78,1.27-1.34"
    />
  );

  return (
<Container> <Row><Half><IconImageText
      icon={icon}
      title="Architecture Design"
      description="We proficiently do architecture design that is highly unique in concepts and bold in execution. We believe that our surroundings directly influence the quality of our lives. Be it our home, workplace, or a culture building of the public realm."
    /></Half>
<Half>
    <Imag src={img}/>
</Half>
    
    </Row><Row><Half>
    <Imag src={img}/>
</Half><Half><IconImageText
      icon={icon}
      title="Architecture Design"
      description="We proficiently do architecture design that is highly unique in concepts and bold in execution. We believe that our surroundings directly influence the quality of our lives. Be it our home, workplace, or a culture building of the public realm."
    /></Half>

    
    </Row><Row><Half><IconImageText
      icon={icon}
      title="Architecture Design"
      description="We proficiently do architecture design that is highly unique in concepts and bold in execution. We believe that our surroundings directly influence the quality of our lives. Be it our home, workplace, or a culture building of the public realm."
    /></Half>
<Half>
    <Imag src={img}/>
</Half>
    
    </Row></Container>
   
  );
};

export default ArchitectureDesign;
