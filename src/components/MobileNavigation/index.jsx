import React, { useState } from 'react'
import { Link } from 'react-scroll'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CallDialog, MessageDialog, MapDialog } from 'components/Dialog'
import c from './index.scss'

const MobileNavigation = () => {
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
    <div className={c.mobileNavigation}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <a className={c.navItem} target="_blank" rel="noopener noreferrer" onClick={showCallDialog}>
        <img src={require('./phone.png')} alt="" className={c.navIcon} />
        <div className={c.label}>撥打電話</div>
      </a>
      <CallDialog show={isCallShow} closeDialog={closeCallDialog} />
      <div className={closeCallClass} onClick={closeCallDialog} onKeyDown={closeCallDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <Link className={c.navItem} to="section11" spy smooth duration={500} offset={49} key="section11">
        <img src={require('./pen.png')} alt="" className={c.navIcon} />
        <div className={c.label}>預約賞屋</div>
      </Link>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <a className={c.navItem} onClick={showMessageDialog} rel="noopener noreferrer">
        <img src={require('./chat.png')} alt="" className={c.navIcon} />
        <div className={c.label}>FB諮詢</div>
      </a>
      <MessageDialog show={isMessageShow} closeDialog={closeMessageDialog} />
      <div
        className={closeMessageClass}
        onClick={closeMessageDialog}
        onKeyDown={closeMessageDialog}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <a className={c.navItem} onClick={showMapDialog} rel="noopener noreferrer">
        <img src={require('./map.png')} alt="" className={c.navIcon} />
        <div className={c.label}>地圖導航</div>
      </a>
      <MapDialog show={isMapShow} closeDialog={closeMapDialog} />
      <div className={closeMapClass} onClick={closeMapDialog} onKeyDown={closeMapDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  )
}

export default MobileNavigation
