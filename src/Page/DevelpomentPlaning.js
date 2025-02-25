import React from 'react'
import InteriorDesign from '../components/InteriorDesign/InteriorDesign'
import { Herosection,Heroimg } from './Faqs';
import img2 from '../assets/faq.jpg'
import PrimenestFeature from '../components/figma5/PrimenestFeature';
const data = [
    {
      title: "Develpoment Planing",
      description: "  Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication",
      images: [
'https://thefield.asla.org/wp-content/uploads/2020/04/tbg_seaholm_plan.jpg',
        "https://khales.ae/wp-content/uploads/2024/03/Property-Acquisition-and-Disposition.png",
         "https://brabbu.com/blog/wp-content/uploads/2021/02/Aati-tayer-dubai.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d1c74189930427.65b294ce482ca.jpg"
      ]

    }
  ];
function DevelpomentPlaning() {
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

export default DevelpomentPlaning