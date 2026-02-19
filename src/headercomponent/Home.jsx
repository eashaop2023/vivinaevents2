import React from 'react'
import ProEvent from '../homecomponents/ProEvent'
import AboutHomeSection from '../homecomponents/AboutHomeSection'
import EventHome from '../homecomponents/EventHome'
import HomeProShootSection from '../homecomponents/HomeProShootSection'
import HomeDownload from '../homecomponents/HomeDownload'
import HomeFrqQuestions from '../homecomponents/HomeFrqQuestions'
import HomeCustomer from '../homecomponents/HomeCustomer'
import HomeLuxue from '../homecomponents/HomeLuxue'
import OurServices from '../homecomponents/OurServices'


const Home = () => {
  return (
    <>
    <ProEvent/>
    <AboutHomeSection/>
    <EventHome/>
    <HomeProShootSection/>
    <OurServices/>
    <HomeLuxue/>
    <HomeCustomer/>
    <HomeFrqQuestions/>
    <HomeDownload/>
    </>
  )
}

export default Home