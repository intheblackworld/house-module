import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import Mask from 'components/AstrictMask'
// import Order from 'components/Order'
import ViewPort from 'components/ViewPort'
// import FixLink from 'components/FixLink'
import FullScreen from './FullScreen'
// import ContactSection from './ContactSection'
import ContactSection from './ContactSection'
// import { isMobile } from '../utils'

import './index.scss'

const Master = lazy(() => import('projects/cj/Master'))
const Section2 = lazy(() => import('projects/cj/Section2'))
// const Section7 = lazy(() => import('projects/dyc/Section7'))
// const Section8 = lazy(() => import('projects/dyc/Section8'))
// const MobileSection = lazy(() => import('projects/star/MobileSection'))
// const Section6 = lazy(() => import('projects/start/Section6'))

const Layout = () => (
  <React.Fragment>
    <Mask />
    {/* <FixLink /> */}
    <FullScreen needCutHeader={false}>
      <Element id="master">
        <ViewPort isBottom={false}>
          <Master />
        </ViewPort>
      </Element>
    </FullScreen>
    <Section2 />
    <ContactSection />
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
