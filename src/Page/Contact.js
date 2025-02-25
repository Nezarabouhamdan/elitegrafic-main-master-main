import React from 'react'
import { Heroimg, Herosection } from './Faqs'
import img2 from '../assets/faq.jpg'
import ContactForm from '../components/figcontact/ContactForm'
import Productpage from './Productpage'
function Contact() {
  return (
    <div>  <Herosection>
    <Heroimg src={img2}/>
    <p style={{marginTop:'20px',fontSize:'30px'}}>Get In touch with us
    </p>
   </Herosection> <div   style={{display:'grid',placeItems:'center'}}
    >
        <ContactForm/> <p style={{marginTop:'60px',fontSize:'30px',fontFamily:'Inter',fontWeight:'800'}}>Visit our Branch
        </p>
    <iframe src="https://storage.googleapis.com/maps-solutions-s0czar77ti/locator-plus/t5hz/locator-plus.html"
width="70%" height="700px" style={{marginTop:'70px',marginBottom:'70PX'}}
loading="lazy">
</iframe>
</div>
<Productpage/>
</div>
  )
}

export default Contact