import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedProjects from '../components/Featured Projects/FeaturedProjects'
import LatestProjects from '../components/Latest Projects/LatestProjects'
import PaginatedList from '../components/Pagitionsection/Pagitionsection'

function Projectspage() {
  return (
    <div><Hero/><LatestProjects/><PaginatedList/></div>
  )
}

export default Projectspage