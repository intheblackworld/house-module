import React from 'react'
import Viewport from 'components/ViewPort'
import Order from 'components/Order'
import ContactInfo from 'components/ContactInfo'
import Section from 'layouts/Section'
import GoogleMap from 'components/GoogleMap'
import HouseInfo from 'components/HouseInfo'
import css from './index.scss'
import info from '../../info'

const {
  address, phone, fbLink, googleLink, houseInfos, fbMessage,
} = info
const ContactSection = () => (
  <div className={css.contactSection}>
    <div className={css.orderBg}>
      <Viewport>
        <div id="orderBg" className={`${css.order}`}>
          <Order />
        </div>
      </Viewport>
      <Viewport isBottom={false}>
        <ContactInfo
          address={address}
          phone={phone}
          fbLink={fbLink}
          googleLink={googleLink}
          fbMessage={fbMessage}
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
