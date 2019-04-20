import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
// import Order from 'components/Order'
import ViewPort from 'components/ViewPort'
// import FixLink from 'components/FixLink'
import FullScreen from './FullScreen'
// import ContactSection from './ContactSection'
import ContactSection2 from './ContactSection2'
// import { isMobile } from '../utils'

import './index.scss'

const Master = lazy(() => import('projects/xs/Master'))
const Section2 = lazy(() => import('projects/xs/Section2'))
const Section3 = lazy(() => import('projects/xs/Section3'))
const Section4 = lazy(() => import('projects/xs/Section4'))
const Section5 = lazy(() => import('projects/xs/Section5'))
const Section6 = lazy(() => import('projects/xs/Section6'))
const Section7 = lazy(() => import('projects/xs/Section7'))
// const Section8 = lazy(() => import('projects/dyc/Section8'))
// const MobileSection = lazy(() => import('projects/star/MobileSection'))
// const Section6 = lazy(() => import('projects/start/Section6'))

const Layout = () => (
  <React.Fragment>
    <Mask />
    {/* <FixLink /> */}
    <FullScreen needCutHeader master>
      <Element id="master">
        <ViewPort isBottom={false}>
          <Master />
        </ViewPort>
      </Element>
    </FullScreen>
    <Element id="point2">
      <ViewPort isBottom={false}>
        <Section2 />
      </ViewPort>
    </Element>
    <Element id="point3">
      <ViewPort isBottom={false}>
        <Section3 />
      </ViewPort>
    </Element>
    <Element id="point4">
      <ViewPort isBottom={false}>
        <Section4 />
      </ViewPort>
    </Element>
    <Element id="point5">
      <Section5 />
    </Element>
    <Element id="point6">
      <Section6 />
    </Element>
    <Element id="point7">
      <Section7 />
    </Element>
    <ContactSection2 />
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
