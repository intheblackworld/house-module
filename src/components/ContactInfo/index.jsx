import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faPhone } from '@fortawesome/free-solid-svg-icons'
import HButton from 'components/Button'
import MapLink from 'components/Button/MapLink'
import { CallDialog, MessageDialog, MapDialog } from 'components/Dialog'
import logo from './logo.png'
import c from './index.scss'

const ContactInfo = ({
  phone, fbLink, fbMessage, address, googleLink, show,
}) => {
  const logoClass = cx(c.logo, {
    [c.show]: show,
    [c.hide]: !show,
  })

  const infoClass = cx(c.info, {
    [c.show]: show,
    [c.hide]: !show,
  })

  const [isCallShow, toggleCallDialog] = useState(false)

  const showCallDialog = () => {
    toggleCallDialog(!isCallShow)
  }

  const closeCallDialog = () => {
    toggleCallDialog(false)
  }

  const [isMessageShow, toggleMessageDialog] = useState(false)

  const showMessageDialog = () => {
    toggleMessageDialog(!isMessageShow)
  }

  const closeMessageDialog = () => {
    toggleMessageDialog(false)
  }

  const [isMapShow, toggleMapDialog] = useState(false)

  const showMapDialog = () => {
    toggleMapDialog(!isMapShow)
  }

  const closeMapDialog = () => {
    toggleMapDialog(false)
  }

  const closeCallClass = cx(c.closeCall, {
    [c.show]: isCallShow,
  })

  const closeMessageClass = cx(c.closeMessage, {
    [c.show]: isMessageShow,
  })

  const closeMapClass = cx(c.closeMap, {
    [c.show]: isMapShow,
  })
  return (
    <div className={c.contactInfo}>
      <Image src={logo} className={logoClass} />
      <div className={infoClass}>
        {/* 在手機或平板上顯示可撥打電話的按鈕 */}
        <div className={c.hideOnPhone}>
          <HButton icon={faPhone}>{phone}</HButton>
        </div>
        <div className={c.showOnPhone}>
          <HButton icon={faPhone} click={showCallDialog}>
            {phone}
          </HButton>
          <CallDialog show={isCallShow} closeDialog={closeCallDialog} />
          <div className={closeCallClass} onClick={closeCallDialog} onKeyDown={closeCallDialog}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        {/* FB Messenger 諮詢 */}
        <div className={c.hideOnPhone}>
          <HButton icon={faFacebookMessenger} link={fbMessage} type="fbMessenger">
            FB Messenger 諮詢
          </HButton>
        </div>
        <div className={c.showOnPhone}>
          <HButton
            icon={faFacebookMessenger}
            click={showMessageDialog}
          >
              FB Messenger 諮詢
          </HButton>
          <MessageDialog show={isMessageShow} closeDialog={closeMessageDialog} />
          <div
            className={closeMessageClass}
            onClick={closeMessageDialog}
            onKeyDown={closeMessageDialog}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        {/* FB 粉絲頁 */}
        <HButton icon={faFacebookF} link={fbLink} type="fb">
          前往粉絲專頁
        </HButton>

        {/* Google Map */}
        <div className={c.hideOnPhone}>
          <MapLink link={googleLink} type="googlemap">{address}</MapLink>
        </div>
        <div className={c.showOnPhone}>
          <MapLink click={showMapDialog}>
            {address}
          </MapLink>
          <MapDialog show={isMapShow} closeDialog={closeMapDialog} />
          <div className={closeMapClass} onClick={closeMapDialog} onKeyDown={closeMapDialog}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
