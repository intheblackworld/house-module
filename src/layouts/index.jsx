import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
import FullScreen from './FullScreen'
import Section from './Section'
// import ViewPort from 'components/ViewPort'

import ContactSection from './ContactSection'

import './index.scss'

const Master = lazy(() => import('projects/fy/Master'))
const Section2 = lazy(() => import('projects/fy/Section2'))
const Section3 = lazy(() => import('projects/fy/Section3'))
const Section4 = lazy(() => import('projects/fy/Section4'))
const Section5 = lazy(() => import('projects/fy/Section5'))
const Section6 = lazy(() => import('projects/fy/Section6'))

const Layout = () => (
  <React.Fragment>
    <Mask />
    <FullScreen needCutHeader={false}>
      <Element id="master">
        <Master />
      </Element>
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

export default Layout
