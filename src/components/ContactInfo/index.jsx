import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import logo from 'assets/img/contactInfo/logo.png'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faPhone } from '@fortawesome/free-solid-svg-icons'
import HButton from 'components/Button'
import MapLink from 'components/Button/MapLink'
import { CallDialog, MessageDialog, MapDialog } from 'components/Dialog'
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
  const [showCallIndex, changeShowCallIndex] = useState(0)

  const showCallDialog = (index) => {
    toggleCallDialog(!isCallShow)
    changeShowCallIndex(index)
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

  const [showMapIndex, changeMapIndex] = useState(false)
  const showMapDialog = (index) => {
    toggleMapDialog(!isMapShow)
    changeMapIndex(index)
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
          <HButton icon={faPhone}>{phone[0]}</HButton>
        </div>
        <div className={c.hideOnPhone}>
          <HButton icon={faPhone}>{phone[1]}</HButton>
        </div>
        <div className={c.showOnPhone}>
          <HButton icon={faPhone} click={() => showCallDialog(0)}>
            {phone[0]}
          </HButton>
          <HButton icon={faPhone} click={() => showCallDialog(1)}>
            {phone[1]}
          </HButton>
          <CallDialog show={isCallShow} closeDialog={closeCallDialog} index={showCallIndex} />
          <div className={closeCallClass} onClick={closeCallDialog} onKeyDown={closeCallDialog}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        {/* FB Messenger 諮詢 */}
        <div className={c.hideOnPhone}>
          <HButton icon={faFacebookMessenger} link={fbMessage}>
            FB Messenger 諮詢
          </HButton>
        </div>
        <div className={c.showOnPhone}>
          <HButton icon={faFacebookMessenger} click={showMessageDialog}>
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
        <HButton icon={faFacebookF} link={fbLink}>
          前往粉絲專頁
        </HButton>

        {/* Google Map */}
        <div className={c.hideOnPhone}>
          <MapLink link={googleLink[0]}>{address[0]}</MapLink>
        </div>
        <div className={c.hideOnPhone}>
          <MapLink link={googleLink[1]}>{address[1]}</MapLink>
        </div>
        <div className={c.showOnPhone}>
          <MapLink click={() => showMapDialog(0)}>
            {address[0]}
          </MapLink>
          <MapLink click={() => showMapDialog(1)}>
            {address[1]}
          </MapLink>
          <MapDialog show={isMapShow} closeDialog={closeMapDialog} index={showMapIndex} />
          <div className={closeMapClass} onClick={closeMapDialog} onKeyDown={closeMapDialog}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
