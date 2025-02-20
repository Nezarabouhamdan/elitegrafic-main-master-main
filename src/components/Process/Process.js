import React from 'react'
import { Row } from '../../Globalstyles'
import OurProcessWork from '../OurProcessWork/OurProcessWork'
import img from '../../assets/process.jpg'
import { Container } from './ProcessStyles'
import { Title } from '../Featured Projects/FeaturedProjects'
import { StepsData } from '../../data/StepsData'
function Process() {
  return (
    <><Container>
       <Title>
          <h2 className="fsz-45" style={{fontFamily: "Inter",}}>Our Process Work</h2>
        </Title>
    <Row>
    <OurProcessWork panels={StepsData} button={true}/><img height='550px'src={img} width={'22%' }style={{borderRadius:'20px' ,    transform: 'rotate(15deg)'}}></img>
    </Row>
    </Container>
    </>
  )
}

export default Process