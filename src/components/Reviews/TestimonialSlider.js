import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialSlider.css'
import { Autoplay} from 'swiper/modules'; // Import modules

const TestimonialSlider = () => {
  return (
    <section className="creative-testimonial--slider">
      <div
        className="testimonial-inner"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/greenappletravel-ae/image/upload/v1730893099/greenapple/header/Untitled_design_69_k9jhxg.png)',
        }}
      >
        <div className="testimonial-row">
          <h2 className="testimonial-heading" style={{marginTop:'40px',marginBottom:'60px'}}>
          Our Esteemed Clients and Partners


          </h2>
          <div className="testimonial-wrap">
            <Swiper
             modules={[Autoplay]}
              spaceBetween={50}
              speed={3000}
              slidesPerView={1}
              loop
              autoplay={{ delay: 1000, disableOnInteraction: false }} // set delay, etc.
              keyboard={{ enabled: true, onlyInViewport: true }}
              effect="slide"
            >
              <SwiperSlide>
                <div className="swiper-slide--inner">
                  <div className="slide-avatar">
                    <img
                      src="https://imgpanda.com/upload/ib/3T9Coa4eFQ.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial-detail">
                    <img
                      src="https://imgpanda.com/upload/ib/07fXcY3EIH.png"
                      alt="Company Logo"
                    />
                    <p>
                      Their team are easy to work with and helped me make
                      amazing websites in a short amount of time. Thanks
                      guys for all your hard work. Trust us we looked for a
                      very long time.
                    </p>
                    <span>Herman miller, Monday</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide--inner">
                  <div className="slide-avatar">
                    <img
                      src="https://imgpanda.com/upload/ib/EG2hj3Ch4z.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial-detail">
                    <img
                      src="https://imgpanda.com/upload/ib/VUrKtb4s8h.png"
                      alt="Company Logo"
                    />
                    <p>
                      Their team are easy to work with and helped me make
                      amazing websites in a short amount of time. Thanks
                      guys for all your hard work. Trust us we looked for a
                      very long time.
                    </p>
                    <span>Matthew taylor, invision</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide--inner">
                  <div className="slide-avatar">
                    <img
                      src="https://imgpanda.com/upload/ib/CEnecSuafy.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial-detail">
                    <img
                      src="https://imgpanda.com/upload/ib/qisrv7T2JJ.png"
                      alt="Company Logo"
                    />
                    <p>
                      Their team are easy to work with and helped me make
                      amazing websites in a short amount of time. Thanks
                      guys for all your hard work. Trust us we looked for a
                      very long time.
                    </p>
                    <span>Leonel mooney, Logitech</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="company-details--row">
            <div className="company-box">
              <div className="company-box-inner">
                <div className="company-box-top">
                  <img style={{
                    width:'33%',
          height:'100px',
                    objectFit:'fill'}}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/AW_DH_PV_POS_RGB_EN_%28002%29.png"
                    alt="Company Name"
                  />
                </div>
                <div className="company-box-bottom">
                  <span>
                    Project management - <strong>275% Growth</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="company-box">
              <div className="company-box-inner">
                <div className="company-box-top"  style={{ }}>
                  <img 
                  style={{
                    width:'33%',
          height:'100px',
                    objectFit:'fill'}}
                    src="https://gulfvisiongov.com/wp-content/uploads/2024/08/dubai-municipality-logo.png"
                    alt="Company Name"
                  />
                </div>
                <div className="company-box-bottom">
                  <span>
                    Team management - <strong>195% Growth</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="company-box">
              <div className="company-box-inner">
                <div className="company-box-top">
                  <img       style={{
                    width:'33%',
          height:'100px',
                    objectFit:'fill'}}
                    src="https://www.tsilimited.com/wp-content/uploads/2020/04/RTA-LOGO-1.png"
                    alt="Company Name"
                  />
                </div>
                <div className="company-box-bottom">
                  <span>
                    Secure storage - <strong>235% Growth</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
