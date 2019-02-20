import React from 'react'
import { Image } from 'semantic-ui-react'
import logo from 'assets/img/contactInfo/logo.png'
import HButton from 'components/Button'
import MapLink from 'components/Button/MapLink'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// import

import css from './index.scss'

const ContactInfo = ({
  phone, fbLink, address, googleLink,
}) => (
  <div className={css.contactInfo}>
    <Image src={logo} className={css.logo} />
    <div className={css.info}>
      <HButton icon={faPhone}>{phone}</HButton>
      <HButton icon={faFacebookF} link={fbLink}>
        FACEBOOK
      </HButton>
      <MapLink link={googleLink}>{address}</MapLink>
    </div>
  </div>
)

export default ContactInfo
