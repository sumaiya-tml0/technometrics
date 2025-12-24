import Banner from '@/components/common/Banner'
import React from 'react'
import heroBg from '@/assets/images/about/aboutBanner.png'
import AboutCompany from './AboutCompany'
import Journey from './Journey'
import Affiliations from './Affiliations'
import Clients from './Clients'
import Sustainability from './Sustainability'
import { useScrollToSection } from '@/hooks/useScrollToSection'

const AboutLayout = () => {
  useScrollToSection()

  return (
    <div>
        <Banner title="About Us" bannerImg={heroBg}/>
        <AboutCompany/>
        <Journey/>
        <Affiliations/>
        <Clients/>
        <Sustainability/>
    </div>

  )
}

export default AboutLayout