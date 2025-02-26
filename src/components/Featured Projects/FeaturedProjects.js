import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assets/villa4.jpeg'
import img2 from '../../assets/v5.jpeg'
import img3 from '../../assets/v6.jpeg'
import int from '../../assets/int.jpg'
import int2 from '../../assets/int2.jpg'
import int3 from '../../assets/int3.jpg'
import int4 from '../../assets/int4.jpg'
import arc1 from '../../assets/arch1.jpeg'
import arc2 from '../../assets/arch2.jpeg'
import arc3 from '../../assets/arch3.jpeg'
import arc4 from '../../assets/arch4.jpeg'
import { useInView } from 'react-intersection-observer';

SwiperCore.use([Navigation, Pagination]);

const Section = styled.section`
  padding: 70px 0;
  background-color:rgb(255, 255, 255);
  opacity: 1;
  transform: translateY(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;
margin-top:-100px;
border-top-left-radius: 40px 40px;
border-top-right-radius: 40px 40px;

`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Title = styled.div`
  margin-bottom: 70px;
  text-align: center;
  h2 {
    font-size: 45px;
    margin: 0;
  }
       @media (max-width: 968px) {
         margin-bottom:00px;

         h2 {
    font-size: 30px;
    margin: 0;
  }
  }
`;
const TabsLinksWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const NavPills = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-right: 10px;
  }
  button {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 50px;
    transition: background 0.3s;
    &:hover,
    &.active {
      background: #66a109;
      color: #fff;
    }
  }
`;
const AllProjectsLink = styled.a`
  display: inline-block;
  border: 1px solid #66a109;
  border-radius: 50px;
  padding: 10px 20px;
  color: #66a109;
  text-decoration: none;
  transition: background 0.3s;
  &:hover {
    background: #66a109;
    color: #fff;
  }
`;
const ProjectsWrapper = styled.div`
  position: relative;
`;
const FloatCursor = styled.div`
  position: absolute;
  left: 50%;
  bottom: -30px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  line-height: 1.2;
`;
const ProjectCard = styled.div`
  background: #fff;
  border-radius: 0px;
  border-top-left-radius: 20px 20px;
border-top-right-radius: 20px 20px;
    height: 80vh;
    border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  /* Fade in & slide up on mount */
  opacity: 0;
  transform: translateY(90px);
  animation: fadeInUp 1s ease forwards;

   &:nth-child(odd) { animation-delay: 0.4s; }
     &:nth-child(even) { animation-delay: 0.8s; } 

  transition: transform 0.6s ease, box-shadow 0.6s ease;

  &:hover {
    transform: scale(1.05) rotate(0.5deg);
    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
       @media (max-width: 968px) {
       height: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  object-fit: fill;
   @media (max-width: 968px) {
       height: 40%;
  }
  
  
`;
const ProjectInfo = styled.div`
  padding: 15px;
`;
const ProjectTags = styled.div`
  margin-bottom: 10px;
  a {
    margin-right: 5px;
    font-size: 14px;
    color: #66a109;
    text-decoration: none;
  }
`;
const ProjectTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 10px;
  a {
    color: #333;
    text-decoration: none;
  }
    @media (max-width: 968px) {
  font-size: 15px;
  }
`;
const ProjectText = styled.div`
  font-size: 14px;
  color: #666;
   @media (max-width: 968px) {
  font-size: 10px;
  }
`;

const FeaturedProjects = () => {
    const [activeTab, setActiveTab] = useState('proj2');
    const [sectionRef, isIntersecting] = useInView({ threshold: 0.2 });
    const tabs = [
    { id: 'proj1', label: 'Featured' },
    { id: 'proj2', label: 'Architecture' },
    { id: 'proj3', label: 'Interior Design' },
    { id: 'proj4', label: 'Landscape' },
    { id: 'proj5', label: 'Furniture' },
  ];
  const projectsData = {
    proj1: [
      {
        id: 1,
        image: img1,
        tags: ['Architecture', 'Furniture'],
        title: 'Townhouse in San Jose',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
      {
        id: 2,
        image: img3,
        tags: ['Furniture', 'Interior Design'],
        title: 'Home Renovation & Interior Design',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
      {
        id: 3,
        image: img2,
        tags: ['Furniture', 'Interior Design'],
        title: 'Private Villa B63',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
      {
        id: 4,
        image: img1,
        tags: ['Interior Design', 'Furniture'],
        title: 'Townhouse in San Jose',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
    ], 
     proj2: [
        {
          id: 5,
          image:arc1,
          tags: ['Furniture', 'Interior Design'],
          title: 'Private Villa B63',
          text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
        },
        {
          id: 6,
          image: arc2,
          tags: ['Interior Design', 'Furniture'],
          title: 'Townhouse in San Jose',
          text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
        },
        {
          id: 7,
          image: arc3,
          tags: ['Furniture', 'Interior Design'],
          title: 'Townhouse in San Jose',
          text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
        },
        {
          id: 8,
          image: arc4,
          tags: ['Interior Design', 'Furniture'],
          title: 'Home Renovation & Interior Design',
          text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
        },
      ],
    proj3: [
      {
        id: 9,
        image:int,
        tags: ['Furniture', 'Interior Design'],
        title: 'Private Villa B63',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
      {
        id: 10,
        image: int2,
        tags: ['Interior Design', 'Furniture'],
        title: 'Townhouse in San Jose',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
      {
        id: 11,
        image: int3,
        tags: ['Furniture', 'Interior Design'],
        title: 'Townhouse in San Jose',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
      {
        id: 12,
        image: int4,
        tags: ['Interior Design', 'Furniture'],
        title: 'Home Renovation & Interior Design',
        text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.',
      },
    ],
  };

  return (
    <Section   ref={sectionRef}
    className={isIntersecting ? 'animate' : ''}>
      <Container>
        <Title>
          <h2 className="fsz-45" style={{      fontFamily: "Inter",}}>Featured Projects</h2>
        </Title>
        <TabsLinksWrapper>
          <NavPills>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                  style={{      fontFamily: "Inter",}}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </NavPills>
          <div>
            <AllProjectsLink href="/Projects">
              <span  style={{      fontFamily: "Inter",}}>
                View All Projects <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </AllProjectsLink>
          </div>
        </TabsLinksWrapper>
        <div className="projects">
          {activeTab === 'proj1' && (
            <ProjectsWrapper>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1.5}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.5 },
                }}
              >
                {projectsData.proj1.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectCard>
                      <a href={project.image} data-fancybox="proj">
                        <ProjectImage src={project.image} alt={project.title} />
                      </a>
                      <ProjectInfo>
                        <ProjectTags>
                          {project.tags.map((tag, index) => (
                            <a style={{      fontFamily: "Inter",}} key={index} href="#">{tag}</a>
                          ))}
                        </ProjectTags>
                        <ProjectTitle>
                          <a style={{      fontFamily: "Inter",} }href="#">{project.title}</a>
                        </ProjectTitle>
                        <ProjectText style={{      fontFamily: "Inter",}}>{project.text}</ProjectText>
                      </ProjectInfo>
                    </ProjectCard>
                  </SwiperSlide>
                ))}
              </Swiper>
      
            </ProjectsWrapper>
          )}
          {activeTab === 'proj2' && (
            <ProjectsWrapper>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1.5}
                
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.5 },
                }}
              >
                {projectsData.proj2.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectCard>
                      <a href={project.image} data-fancybox="proj">
                        <ProjectImage src={project.image} alt={project.title} />
                      </a>
                      <ProjectInfo>
                        <ProjectTags>
                          {project.tags.map((tag, index) => (
                            <a key={index} href="#">{tag}</a>
                          ))}
                        </ProjectTags>
                        <ProjectTitle>
                          <a href="#">{project.title}</a>
                        </ProjectTitle>
                        <ProjectText>{project.text}</ProjectText>
                      </ProjectInfo>
                    </ProjectCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ProjectsWrapper>
          )}    {activeTab === 'proj3' && (
            <ProjectsWrapper>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1.5}
                
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.5 },
                }}
              >
                {projectsData.proj3.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectCard>
                      <a href={project.image} data-fancybox="proj">
                        <ProjectImage src={project.image} alt={project.title} />
                      </a>
                      <ProjectInfo>
                        <ProjectTags>
                          {project.tags.map((tag, index) => (
                            <a key={index} href="#">{tag}</a>
                          ))}
                        </ProjectTags>
                        <ProjectTitle>
                          <a href="#">{project.title}</a>
                        </ProjectTitle>
                        <ProjectText>{project.text}</ProjectText>
                      </ProjectInfo>
                    </ProjectCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ProjectsWrapper>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProjects;
