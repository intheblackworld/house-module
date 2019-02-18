import React, { lazy } from 'react'

import FullScreen from 'components/FullScreen'
import Section from 'components/Section'

import ViewPort from 'components/ViewPort'

const Master = lazy(() => import('sections/ThreeFa/Master'))
const Section2 = lazy(() => import('sections/ThreeFa/Section2'))
const Section3 = lazy(() => import('sections/ThreeFa/Section3'))
const Section4 = lazy(() => import('sections/ThreeFa/Section4'))
const Section5 = lazy(() => import('sections/ThreeFa/Section5'))
const Section6 = lazy(() => import('sections/ThreeFa/Section6'))

const SectionList = () => (
  <React.Fragment>
    <FullScreen needCutHeader={false}>
      <Master />
    </FullScreen>
    <Section2 />
    <Section>
      <Section3 />
    </Section>
    <Section>
      <Section4 />
    </Section>
    <Section5 />
    <ViewPort>
      <Section6 />
    </ViewPort>
  </React.Fragment>
)

export default SectionList
