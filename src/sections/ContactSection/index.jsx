import React from 'react'
import Viewport from 'components/ViewPort'
import Order from 'components/Order'
import ContactInfo from 'components/ContactInfo'
import Section from 'components/Section'
import GoogleMap from 'components/GoogleMap'
import HouseInfo from 'components/HouseInfo'
import AnimateBg from 'components/AnimateBg'
import css from './index.scss'
import info from '../../info'

const {
  address, phone, fbMessage, fbLink, googleLink, houseInfos,
} = info

const ContactSection = () => (
  <div className={css.contactSection}>
    <div className={css.orderBg}>
      <AnimateBg />
      <Viewport>
        <div id="orderBg" className={`${css.order}`}>
          <Order />
        </div>
      </Viewport>
      <Viewport isBottom={false}>
        <ContactInfo
          address={address}
          fbMessage={fbMessage}
          phone={phone}
          fbLink={fbLink}
          googleLink={googleLink}
        />
      </Viewport>
    </div>
    <GoogleMap />
    <div className={css.houseBg}>
      <Section>
        <Viewport isBottom={false}>
          <HouseInfo houseInfos={houseInfos} />
        </Viewport>
      </Section>
    </div>
  </div>
)

export default ContactSection
