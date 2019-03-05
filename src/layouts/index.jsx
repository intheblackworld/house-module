import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
// import Order from 'components/Order'
import ViewPort from 'components/ViewPort'
import FullScreen from './FullScreen'
// import Section from './Section'

import './index.scss'

const Master = lazy(() => import('projects/star/Master'))
const Section2 = lazy(() => import('projects/star/Section2'))
const Section3 = lazy(() => import('projects/star/Section3'))
const Section4 = lazy(() => import('projects/star/Section4'))
// const Section5 = lazy(() => import('projects/start/Section5'))
// const Section6 = lazy(() => import('projects/start/Section6'))

const Layout = () => (
  <React.Fragment>
    <Mask />
    <FullScreen needCutHeader master>
      <Element id="master">
        <ViewPort>
          <Master />
        </ViewPort>
      </Element>
    </FullScreen>
    <FullScreen needCutHeader>
      <Element id="section2">
        <Section2 />
      </Element>
    </FullScreen>
    <Element id="section3">
      <Section3 />
    </Element>
    <Element id="section4">
      <Section4 />
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
