import React from 'react'
import css from './index.scss'

const SectionTitle = ({ titleTop, titleBottom, iconUrl }) => (
  <div className={css['section-title']}>
    <div className={css.left} />
    <div className={css.middle}>
      <div className={css['icon-container']}>
        <img height="60" width="60" src={iconUrl} alt="" />
      </div>
      <div className={css['title-top']}>{titleTop}</div>
      <div className={css['title-bottom']}>{titleBottom}</div>
    </div>
    <div className={css.right} />
  </div>
)

export default SectionTitle
