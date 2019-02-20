import React from 'react'
import { Image } from 'semantic-ui-react'
import logo from 'assets/img/contactInfo/logo.png'
import HButton from 'components/Button'
import MapLink from 'components/Button/MapLink'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// import

import css from './index.scss'

const ContactInfo = () => (
  <div className={css.contactInfo}>
    <Image src={logo} className={css.logo} />
    <div className={css.info}>
      <HButton icon={faPhone}>02-86421155</HButton>
      <HButton icon={faFacebookF}>FACEBOOK</HButton>
      <MapLink>221 新北市汐止區樟樹二路 93 號</MapLink>
    </div>
  </div>
)

export default ContactInfo
