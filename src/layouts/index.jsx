import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
// import Order from 'components/Order'
import ViewPort from 'components/ViewPort'
// import FixLink from 'components/FixLink'
// import FullScreen from './FullScreen'
import ContactSection from './ContactSection'
// import { isMobile } from '../utils'

import './index.scss'

const Master = lazy(() => import('projects/ds/Master'))
const Section2 = lazy(() => import('projects/ds/Section2'))
const Section3 = lazy(() => import('projects/ds/Section3'))
const Section4 = lazy(() => import('projects/ds/Section4'))
const Section5 = lazy(() => import('projects/ds/Section5'))
const Section6 = lazy(() => import('projects/ds/Section6'))
const Section7 = lazy(() => import('projects/ds/Section7'))
// const Section7 = lazy(() => import('projects/dyc/Section7'))
// const Section8 = lazy(() => import('projects/dyc/Section8'))
// const MobileSection = lazy(() => import('projects/star/MobileSection'))
// const Section6 = lazy(() => import('projects/start/Section6'))

const Layout = () => (
  <React.Fragment>
    <Mask />
    {/* <FixLink /> */}
    <Element id="master">
      <ViewPort isBottom={false}>
        <Master />
      </ViewPort>
    </Element>
    <Element id="section2">
      <ViewPort isBottom={false}>
        <Section2 />
      </ViewPort>
    </Element>
    <Element id="section3">
      <ViewPort isBottom={false}>
        <Section3 />
      </ViewPort>
    </Element>
    <Element id="section4">
      <Section4 />
    </Element>
    <Element id="section5">
      <ViewPort isBottom={false}>
        <Section5 />
      </ViewPort>
    </Element>
    <Element id="section6">
      <ViewPort isBottom={false}>
        <Section6 />
      </ViewPort>
    </Element>
    <Element id="section7">
      <ViewPort isBottom={false}>
        <Section7 />
      </ViewPort>
    </Element>
    <Element id="contact">
      <ContactSection />
    </Element>
    {/* <Section>
    <Element id="section5">
      <Section5 />
    </Element>
  </Section>
  <Section>
    <Section6 />
  </Section> */}
    {/* <Element id="section6">
    <Order />
  </Element> */}
  </React.Fragment>
)

export default Layout
