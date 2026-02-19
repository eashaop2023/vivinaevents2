import React from 'react'
import OurTeamSection from '../ourjounerycomponents/OurTeamSection'
import OurJourneySlider from '../ourjounerycomponents/OurJourneySlider'
import { Outlet } from 'react-router-dom'
import AboutVivina from '../ourjounerycomponents/AboutVivina'

const OurJourney = () => {
  return (
    <>
    <OurTeamSection/>
    <AboutVivina/>
    <OurJourneySlider/>

    </>
  )
}

export default OurJourney