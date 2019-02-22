import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import FullScreen from 'components/FullScreen'
import Section from 'components/Section'
import Mask from 'components/AstrictMask'
// import ViewPort from 'components/ViewPort'

import ContactSection from 'sections/ContactSection'

import './index.scss'

const Master = lazy(() => import('sections/ThreeFa/Master'))
const Section2 = lazy(() => import('sections/ThreeFa/Section2'))
const Section3 = lazy(() => import('sections/ThreeFa/Section3'))
const Section4 = lazy(() => import('sections/ThreeFa/Section4'))
const Section5 = lazy(() => import('sections/ThreeFa/Section5'))
const Section6 = lazy(() => import('sections/ThreeFa/Section6'))

const SectionList = () => (
  <React.Fragment>
    <Mask />
    <FullScreen needCutHeader={false}>
      <Master />
    </FullScreen>
    <Section>
      <Element id="section2">
        <Section2 />
      </Element>
    </Section>
    <Section>
      <Element id="section3">
        <Section3 />
      </Element>
    </Section>
    <Section>
      <Element id="section4">
        <Section4 />
      </Element>
    </Section>
    <Section>
      <Element id="section5">
        <Section5 />
      </Element>
    </Section>
    <Section>
      <Section6 />
    </Section>
    <Element id="section6">
      <ContactSection />
    </Element>
  </React.Fragment>
)

export default SectionList
