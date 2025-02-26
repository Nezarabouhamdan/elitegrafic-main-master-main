import React from 'react'

import InteriorDesign from '../components/InteriorDesign/InteriorDesign'
import { Herosection,Heroimg } from './Faqs';
import img2 from '../assets/faq.jpg'
import PrimenestFeature from '../components/Find Your Dream Home/PrimenestFeature';

const data = [
    {
      title: "Landscaping",
      description: "  Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication",
      images: [
'https://www.rpsgroup.com/media/k1opda1u/borrol-lookout_event_srss_005.jpg',
        "https://www.haskell.com/wp-content/uploads/2022/03/services-landscape-architecture-hero.jpg",
         "https://www.bgeinc.com/wp-content/uploads/2024/11/Dunham-Pointe_02.jpg",
        "https://media.architecturaldigest.com/photos/64b5797f86873cf99c48e391/4:3/w_1600%2Ch_1200%2Cc_limit/7%2520-%2520KipsBay_Day1_0110-COMP%2520-%2520Stephen%2520Karlisch.jpg"
      ]

    }
  ];
function Landscaping() {
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

export default Landscaping