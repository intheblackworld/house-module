import React, { lazy, Fragment } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
// import Order from 'components/Order'
import ViewPort from 'components/ViewPort'
import FixLink from 'components/FixLink'
import FullScreen from './FullScreen'
// import Section from './Section'

import './index.scss'

const Master = lazy(() => import('projects/star/Master'))
const Section2 = lazy(() => import('projects/star/Section2'))
const Section3 = lazy(() => import('projects/star/Section3'))
const Section4 = lazy(() => import('projects/star/Section4'))
const MobileSection = lazy(() => import('projects/star/MobileSection'))
// const Section5 = lazy(() => import('projects/start/Section5'))
// const Section6 = lazy(() => import('projects/start/Section6'))

const Layout = () => {
  const isIpad = window.navigator.userAgent.match(/iPad/i) != null
  const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
    || window.navigator.userAgent.match(/Android/i) != null
  return (
    <React.Fragment>
      <Mask />
      <FixLink />
      <FullScreen needCutHeader master>
        <Element id="master">
          <ViewPort isBottom={!isIpad}>
            <Master />
          </ViewPort>
        </Element>
      </FullScreen>
      {isMobile ? (
        <Element id="point2">
          <Section2 />
        </Element>
      ) : (
        <FullScreen needCutHeader>
          <Element id="point2">
            <Section2 />
          </Element>
        </FullScreen>
      )}
      {isMobile ? (
        <Fragment>
          <Element>
            <Section4 />
          </Element>
          <Element id="point3">
            <Section3 />
          </Element>
          <MobileSection />
        </Fragment>
      ) : (
        <Fragment>
          <Element id="point3">
            <Section3 />
          </Element>
          <Element>
            <Section4 />
          </Element>
        </Fragment>
      )}
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
}

export default Layout
