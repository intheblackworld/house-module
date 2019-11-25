import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {
  faPhone, faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import info from '../../info'
import c from './index.scss'

export const CallDialog = (props) => {
  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    window.CF_tel()
    window.location.href = `tel:${info.phone.replace('-', '')}`
    setTimeout(() => {
      window.location.href = 'phoneThanks'
    }, 1000)
  }
  const dialogClass = cx(c.dialog, {
    [c.show]: props.show,
  })

  return (
    <div className={dialogClass}>
      <div className={c.dialogContent}>
        <FontAwesomeIcon icon={faPhone} />
        <div className={c.dialogDesc}>賞屋專線</div>
        <div className={c.info}>{info.phone}</div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className={c.cta} onClick={redirectToPhoneThanks}>
          撥打電話
        </div>
      </div>
    </div>
  )
}

export const MessageDialog = (props) => {
  const dialogClass = cx(c.dialog, {
    [c.show]: props.show,
  })

  return (
    <div className={dialogClass}>
      <div className={c.dialogContent}>
        <FontAwesomeIcon icon={faFacebookMessenger} />
        <div className={c.dialogDesc}>Facebook Messenger</div>
        <div className={c.info}>線上諮詢</div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <a className={c.cta} href={info.fbMessage} target="_blank" rel="noopener noreferrer" onClick={window.CF_FBMessenger}>
          立即諮詢
        </a>
      </div>
    </div>
  )
}

export const MapDialog = (props) => {
  const dialogClass = cx(c.dialog, {
    [c.show]: props.show,
  })

  return (
    <div className={dialogClass}>
      <div className={c.dialogContent}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className={c.dialogDesc}>接待會館</div>
        <div className={c.info}>{info.address}</div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <a className={c.cta} href={info.googleLink} target="_blank" rel="noopener noreferrer" onClick={window.CF_map}>
          開啟導航
        </a>
      </div>
    </div>
  )
}

export default null
