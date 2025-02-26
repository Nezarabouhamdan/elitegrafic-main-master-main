import React from 'react'

import InteriorDesign from '../components/InteriorDesign/InteriorDesign'
import { Herosection,Heroimg } from './Faqs';
import img2 from '../assets/faq.jpg'
import PrimenestFeature from '../components/Find Your Dream Home/PrimenestFeature';

const data = [
    {
      title: "Buliding Contracting",
      description: "  Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication",
      images: [
'https://media.istockphoto.com/id/1348291289/photo/construction-site-and-development-in-london.jpg?s=612x612&w=0&k=20&c=QF5pLGNCv3lzHxasDXZlFB0mBmgCcS8eFuD_RRmHkIY=',
        "https://wl-img-prd.s3-accelerate.amazonaws.com/75077550-1557-478a-8f8c-6a87d1a2ce1c-h.jpeg",
         "https://lantechcontracting.com/img/slider/s2.jpg",
        "https://surplus.lk/wp-content/uploads/2021/02/1_1041.jpg"
      ]

    }
  ];
function Bulidingcontracting() {
  return (
    <div>   <Herosection>
    <Heroimg src={img2}/>
    <p style={{marginTop:'20px',fontSize:'30px'}}>{data[0].title}
    </p>
   </Herosection><InteriorDesign data={data}/>
   <PrimenestFeature/>

   </div>
  )
}

export default Bulidingcontracting