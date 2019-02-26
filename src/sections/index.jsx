import React, { lazy } from 'react'
import { Element } from 'react-scroll'
import FullScreen from 'components/FullScreen'
import Section from 'components/Section'
import Mask from 'components/AstrictMask'
import ViewPort from 'components/ViewPort'

import ContactSection from 'sections/ContactSection'

import './index.scss'

const Master = lazy(() => import('sections/ThreeFa/Master'))
// const Section2 = lazy(() => import('sections/ThreeFa/Section2'))
const Section3 = lazy(() => import('sections/ThreeFa/Section3'))
const Section4 = lazy(() => import('sections/ThreeFa/Section4'))
const Section45 = lazy(() => import('sections/ThreeFa/Section4-5'))
const Section5 = lazy(() => import('sections/ThreeFa/Section5'))
const Section6 = lazy(() => import('sections/ThreeFa/Section6'))
const Section7 = lazy(() => import('sections/ThreeFa/Section7'))
const Section8 = lazy(() => import('sections/ThreeFa/Section8'))
const Section9 = lazy(() => import('sections/ThreeFa/Section9'))
const Section10 = lazy(() => import('sections/ThreeFa/Section10'))

const SectionList = () => {
  const width = document.getElementById('app').offsetWidth
  return (
    <React.Fragment>
      <Mask />
      <Element id="master">
        <FullScreen needCutHeader={false}>
          <ViewPort>
            <Master />
          </ViewPort>
        </FullScreen>
      </Element>
      {/* <Section>
        <Element id="section2">
          <Section2 />
        </Element>
      </Section> */}
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
      <Element id="section4-5">
        <FullScreen needCutHeader>
          <Section45 />
        </FullScreen>
      </Element>
      <Section>
        <Element id="section5">
          <Section5 />
        </Element>
      </Section>
      <Element id="section6">
        <FullScreen needCutHeader>
          <Section6 />
        </FullScreen>
      </Element>
      <Element id="section7">
        <FullScreen needCutHeader>
          <Section7 />
        </FullScreen>
      </Element>
      <Section>
        <Element id="section8">
          <Section8 />
        </Element>
      </Section>
      <Element id="section9">
        <FullScreen needCutHeader>
          <Section9 />
        </FullScreen>
      </Element>
      <Element id="section10">
        {width < 768 ? (
          <Section>
            <Section10 />
          </Section>
        ) : (
          <FullScreen needCutHeader>
            <Section10 />
          </FullScreen>
        )}
      </Element>
      <Element id="section11">
        <ContactSection />
      </Element>
    </React.Fragment>
  )
}

export default SectionList
