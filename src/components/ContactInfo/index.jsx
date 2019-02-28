import React from 'react'
import { Image } from 'semantic-ui-react'
import cx from 'classnames'
import HButton from 'components/Button'
import MapLink from 'components/Button/MapLink'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import logo from './logo.png'

// import

import css from './index.scss'

const ContactInfo = ({
  phone, fbLink, address, googleLink, show,
}) => {
  const logoClass = cx(css.logo, {
    [css.show]: show,
    [css.hide]: !show,
  })

  const infoClass = cx(css.info, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={css.contactInfo}>
      <Image src={logo} className={logoClass} />
      <div className={infoClass}>
        {/* 在手機或平板上顯示可撥打電話的按鈕 */}
        <div className={css.hideOnPhone}>
          <HButton icon={faPhone}>{phone}</HButton>
        </div>
        <div className={css.showOnPhone}>
          <HButton icon={faPhone} link={`tel:${phone.replace('-', '')}`}>
            {phone}
          </HButton>
        </div>

        <HButton icon={faFacebookF} link={fbLink}>
          FACEBOOK
        </HButton>
        <MapLink link={googleLink}>{address}</MapLink>
      </div>
    </div>
  )
}

export default ContactInfo
