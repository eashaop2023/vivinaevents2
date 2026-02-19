import React from 'react'
import ProShootPage from '../proshootcomponents/ProShootPage'
import MediaSlider from '../proshootcomponents/MediaSlider'
import ProShootMobile from '../proshootcomponents/ProShootMobile'
import WhyProShoot from '../proshootcomponents/WhyProShoot'
import KnowProShoot from '../proshootcomponents/KnowProShoot'
import BestSellerProShoot from '../proshootcomponents/BestSellerProShoot'

const ProShoot = () => {
  return (
    <>
    <MediaSlider/>
    <ProShootPage/>
    <ProShootMobile/>
    <BestSellerProShoot/>
    <WhyProShoot/>
    <KnowProShoot/>
    </>
  )
}

export default ProShoot