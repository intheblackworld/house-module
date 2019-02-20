import React from 'react'
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
        <Order />
      </FullScreen>
      <ContactInfo
        address={address}
        phone={phone}
        fbLink={fbLink}
        googleLink={googleLink}
      />
    </div>
    <GoogleMap />
    <div className={css.houseBg}>
      <Section>
        <HouseInfo houseInfos={houseInfos} />
      </Section>
    </div>
  </div>
)

export default ContactSection
