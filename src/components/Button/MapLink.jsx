import React from 'react'
import css from './MapLink.scss'

const MapLink = ({ children }) => (
  <div className={css.mapLink}>
    <div className={css.info}>{children}</div>
    <a className={css.link}>
      <span>開啟 Google 地圖</span>
    </a>
  </div>
)

export default MapLink
