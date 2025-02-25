import React from 'react'
import { Heroimg, Herosection } from './Faqs'
import img2 from '../assets/faq.jpg'
import ProfileSection from '../components/Profilesection'
import SectionAboutUs3 from '../components/Whoweare/SectionAboutUs3'
import AboutSection from '../components/aboutus/AboutSection'

function Aboutus() {
  return (
    <>
    <Herosection>
    <Heroimg src={img2}/>
    <p style={{marginTop:'20px',fontSize:'30px'}}>Get to Know Us
    </p>
   </Herosection>
   <SectionAboutUs3/>
   <AboutSection/>

    </>
  )
}

export default Aboutus