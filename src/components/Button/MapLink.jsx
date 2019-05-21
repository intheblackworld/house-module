import React from 'react'
import css from './MapLink.scss'

const MapLink = ({ children, link }) => (
  <div className={css.mapLink}>
    <div className={css.info}>{children}</div>
    <a className={css.link} href={link} target="_blank" rel="noopener noreferrer">
      <span>導航 Google 地圖</span>
    </a>
  </div>
)

export default MapLink
