import React from 'react'
import Hero from '../partnercomponents/Hero'
import WhyJoin from '../partnercomponents/WhyJoin'
import CreatorNetwork from './../partnercomponents/CreatorNetwork';
import Opportunities from './../partnercomponents/Opportunities';
import Journey from './../partnercomponents/Journey';
import SuccessStories from './../partnercomponents/SuccessStories';
import ApplyForm from './../partnercomponents/ApplyForm';
import FAQ from './../partnercomponents/FAQ';

const Partner = () => {
  return (
    <>
    <Hero/>
    <WhyJoin/>
    <CreatorNetwork/>
    <Journey/>
    <Opportunities/>
    <SuccessStories/>
    {/* <ApplyForm/> */}
    <section id="apply-form">
        <ApplyForm />
    </section>
    <FAQ/>
    </>
  )
}

export default Partner