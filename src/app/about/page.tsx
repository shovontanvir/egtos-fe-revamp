import React from 'react'
import Hero from '../../components/aboutus/hero/Hero'
import Economy from '../../components/aboutus/Economy'
import Collaboration from '../../components/aboutus/Collaboration'
import ConsultantQuality from '../../components/aboutus/ConsultantQuality'
import BringsTogather from '../../components/aboutus/BringsTogather'
import Footer from '@/components/Footer'
import SwissGlobal from '@/components/aboutus/SwissGlobal'

const About = () => {
  return (
    <div>
      <Hero />
      <Economy />
      <SwissGlobal />
      <Collaboration />
      <ConsultantQuality />
      <BringsTogather />
      {/* <Footer /> */}

    </div>

  )
}

export default About