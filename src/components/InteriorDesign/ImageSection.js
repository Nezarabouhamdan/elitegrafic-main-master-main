import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules'; // Import modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ImageSection = ({images}) => {
  if (!Array.isArray(images) || images.length === 0) {
    console.error("Images prop is not an array or is empty", images);
    return <p>No images available</p>;
  }

  // Ensure the number of images is even by duplicating the last image if necessary
  if (images.length % 2 !== 0) {
    images.push(images[images.length - 1]);
  }
  const slides = [];
  for (let i = 0; i < images.length; i += 2) {
    slides.push([images[i], images[i + 1]]);
  }

  console.log("Number of slides:", slides.length);

  return (
    <StyledImageSection>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        speed={3000}
        slidesPerView={1}
        loop
        autoplay={{ delay: 1300, disableOnInteraction: false }} // set delay, etc.
        keyboard={{ enabled: true, onlyInViewport: true }}
        effect="slide"
      >
        {slides.map((slideImages, index) => (
          <SwiperSlide key={index} style={{ height: '70vh',display:"flex",flexDirection:'column' }}>
            <TopImage
              src={slideImages[0]}
              alt={`Slide ${index + 1} - Top Image`}
              loading="lazy"
            />
            <BorderBox aria-hidden="true" />
            <BottomImage
              src={slideImages[1]}
              alt={`Slide ${index + 1} - Bottom Image`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
   
      </Swiper>
    </StyledImageSection>
  );
};


const StyledImageSection = styled.section`
   position: relative;
    overflow: hidden;
    height:100%;
    width:40vw;
@media (max-width: 991px) {
    width:95vw;

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  object-fit: cover;
  margin-left: 196px;
  @media (max-width: 991px) {
     width:100vw;
 margin-left: 06px;

    height: 50vh;
    position: static;
  }
  @media (max-width: 640px) {
    margin-left: -1px;
  }
`;

const BorderBox = styled.div`
  width: 151px;
  height: 140px;
  border: 2px solid #66a109;
  border-radius: 4px;
  position: absolute;
  left:20px;
  top: 300px;
  @media (max-width: 991px) {
    display: none; left:0px;
  top: 00px;
  }
`;

const BottomImage = styled.img`
margin-top:90px;
  width: 455px;
  height: 301px;
  border-radius: 4px;
  object-fit: cover;
  position: absolute;
  left:40px;
  top: 230px;
  @media (max-width: 991px) {
    left:0px;
  top: 0px;
     width:100vw;
    height: 50vh;
  
    position: static;
  }
`;
