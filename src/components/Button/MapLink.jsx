import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import css from './MapLink.scss'

const MapLink = ({ children, link, click }) => (
  <div className={css.mapLink}>
    <div className={css.info}>{children}</div>
    {link ? (
      <a className={css.link} href={link} target="_blank" rel="noopener noreferrer">
        <span><FontAwesomeIcon icon={faMapMarkerAlt} />導航 Google 地圖</span>
      </a>
    ) : (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <a className={css.link} onClick={click}>
        <span><FontAwesomeIcon icon={faMapMarkerAlt} />導航 Google 地圖</span>
      </a>
    )}
  </div>
)

export default MapLink
