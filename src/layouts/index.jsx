import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
// import Order from 'components/Order'
import ViewPort from 'components/ViewPort'
import FixLink from 'components/FixLink'
import FullScreen from './FullScreen'
// import Section from './Section'

import './index.scss'

const Master = lazy(() => import('projects/dyc/Master'))
const Section2 = lazy(() => import('projects/dyc/Section2'))
const Section3 = lazy(() => import('projects/dyc/Section3'))
const Section4 = lazy(() => import('projects/dyc/Section4'))
const Section5 = lazy(() => import('projects/dyc/Section5'))
const Section6 = lazy(() => import('projects/dyc/Section6'))
const Section7 = lazy(() => import('projects/dyc/Section7'))
const Section8 = lazy(() => import('projects/dyc/Section8'))
// const MobileSection = lazy(() => import('projects/star/MobileSection'))
// const Section6 = lazy(() => import('projects/start/Section6'))

// const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
// || window.navigator.userAgent.match(/Android/i) != null
const Layout = () => (
  <React.Fragment>
    <Mask />
    <FixLink />
    <FullScreen needCutHeader master>
      <Element id="master">
        <ViewPort isBottom={false}>
          <Master />
        </ViewPort>
      </Element>
    </FullScreen>
    <FullScreen needCutHeader>
      <Element id="point2">
        <Section2 />
      </Element>
    </FullScreen>
    <FullScreen needCutHeader>
      <Element id="point3">
        <Section3 />
      </Element>
    </FullScreen>
    <FullScreen needCutHeader>
      <Element id="point4">
        <Section4 />
      </Element>
    </FullScreen>
    <FullScreen needCutHeader>
      <Element id="point5">
        <Section5 />
      </Element>
    </FullScreen>
    <Element id="point6">
      <Section6 />
    </Element>
    <FullScreen needCutHeader>
      <Element id="point7">
        <Section7 />
      </Element>
    </FullScreen>
    <FullScreen needCutHeader>
      <Element id="point8">
        <Section8 />
      </Element>
    </FullScreen>
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
