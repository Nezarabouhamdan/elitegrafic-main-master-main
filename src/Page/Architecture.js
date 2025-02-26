import React from 'react'
import InteriorDesign from '../components/InteriorDesign/InteriorDesign'
import { Herosection,Heroimg,Head } from './Faqs';
import img2 from '../assets/faq.jpg'
import PrimenestFeature from '../components/Find Your Dream Home/PrimenestFeature';

const data = [
  {
    title: "Architectural Design Services",
    description: "  Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication",
    images: [
      "https://b8architecture.com/dev/wp-content/uploads/2019/01/architects-arquitectos-dubai-luxury-villas-04.jpg",
      "https://cdn.mos.cms.futurecdn.net/ERfYwSxkhfmRSPjPoA3CFL-1280-80.jpg",
      "https://cdn.shopify.com/s/files/1/0491/6799/0939/files/Dubai-Hills-Villa-COLLECTIONAL-05.jpg",
      "https://cdn.excelproperties.ae/media/blog/content/Dubai_Villa_Architecture.webp?width=640&height=480&aspect_ratio=16:9&format=webp&quality=90"
    ]

  }
];
function Architecture() {
  return (
  
    <div>   <Herosection>
    <Heroimg src={img2}/>
    <Head >{data[0].title}
    </Head>
   </Herosection><InteriorDesign data={data}/>
   <PrimenestFeature/>

   </div>)
}

export default Architecture