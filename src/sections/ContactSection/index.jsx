import React from 'react'
import Viewport from 'components/ViewPort'
import Order from 'components/Order'
import ContactInfo from 'components/ContactInfo'
import FullScreen from 'components/FullScreen'
import Section from 'components/Section'
import GoogleMap from 'components/GoogleMap'
import HouseInfo from 'components/HouseInfo'
import css from './index.scss'
import info from './info'

const {
  address, phone, fbLink, googleLink, houseInfos,
} = info
const ContactSection = () => (
  <div className={css.contactSection}>
    <div className={css.orderBg}>
      <FullScreen needCutHeader alignCenter>
        <Viewport>
          <Order />
        </Viewport>
      </FullScreen>
      <Viewport>
        <ContactInfo
          address={address}
          phone={phone}
          fbLink={fbLink}
          googleLink={googleLink}
        />
      </Viewport>
    </div>
    <GoogleMap />
    <div className={css.houseBg}>
      <Section>
        <Viewport>
          <HouseInfo houseInfos={houseInfos} />
        </Viewport>
      </Section>
    </div>
  </div>
)

export default ContactSection
