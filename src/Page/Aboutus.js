import React from 'react'
import { Heroimg, Herosection } from './Faqs'
import img2 from '../assets/faq.jpg'
import ProfileSection from '../components/Profilesection'

function Aboutus() {
  return (
    <>
    <Herosection>
    <Heroimg src={img2}/>
    <p style={{marginTop:'20px',fontSize:'30px'}}>Get to Know Us
    </p>
   </Herosection>
   <ProfileSection/>
    </>
  )
}

export default Aboutus