import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedProjects from '../components/Featured Projects/FeaturedProjects'
import LatestProjects from '../components/Latest Projects/LatestProjects'
import PaginatedList from '../components/Pagitionsection/Pagitionsection'
import AboutSection2 from '../components/figma6/AboutSection'

function Projectspage() {
  return (
    <div><Hero/><LatestProjects/>
            <AboutSection2/>

    <PaginatedList/></div>
  )
}

export default Projectspage