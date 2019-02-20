import React from 'react'
import Order from 'components/Order'
import ContactInfo from 'components/ContactInfo'
import FullScreen from 'components/FullScreen'
import GoogleMap from 'components/GoogleMap'
import css from './index.scss'

const ContactSection = () => (
  <div className={css.contactSection}>
    <div className={css.orderBg}>
      <FullScreen needCutHeader alignCenter>
        <Order />
      </FullScreen>
      <ContactInfo />
    </div>
    <GoogleMap />
  </div>
)

export default ContactSection
