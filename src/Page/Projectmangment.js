import React from 'react'
import InteriorDesign from '../components/InteriorDesign/InteriorDesign'
import { Herosection,Heroimg } from './Faqs';
import img2 from '../assets/faq.jpg'
import PrimenestFeature from '../components/Find Your Dream Home/PrimenestFeature';

const data = [
    {
      title: "Project Management",
      description: "  Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee56b6848a5668fe4c1e75c526f9ae88908da749",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83d057c657e643f783b5365240986c54a25d86a4","https://brabbu.com/blog/wp-content/uploads/2021/02/Aati-tayer-dubai.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d1c74189930427.65b294ce482ca.jpg"
      ]

    }
  ];
function ProjectManagement() {
  return (
    
    <div>   <Herosection>
    <Heroimg src={img2}/>
    <p style={{marginTop:'20px',fontSize:'30px'}}>{data[0].title}
    </p>
   </Herosection><InteriorDesign data={data}/>            <PrimenestFeature/>
   </div>
  )
}

export default ProjectManagement