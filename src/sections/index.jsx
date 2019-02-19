import React, { lazy } from 'react'

import FullScreen from 'components/FullScreen'
import Section from 'components/Section'
// import ViewPort from 'components/ViewPort'

import ContactSection from 'sections/ContactSection'

import './index.scss'

const Master = lazy(() => import('sections/ThreeFa/Master'))
const Section2 = lazy(() => import('sections/ThreeFa/Section2'))
const Section3 = lazy(() => import('sections/ThreeFa/Section3'))
const Section4 = lazy(() => import('sections/ThreeFa/Section4'))
const Section5 = lazy(() => import('sections/ThreeFa/Section5'))
// const Section6 = lazy(() => import('sections/ThreeFa/Section6'))

const SectionList = () => (
  <React.Fragment>
    <FullScreen needCutHeader={false}>
      <Master />
    </FullScreen>
    <Section>
      <Section2 />
    </Section>
    <Section>
      <Section3 />
    </Section>
    <Section>
      <Section4 />
    </Section>
    <Section>
      <Section5 />
    </Section>
    {/* <ViewPort>
      <Section>
        <Section6 />
      </Section>
    </ViewPort> */}
    <ContactSection />
  </React.Fragment>
)

export default SectionList
