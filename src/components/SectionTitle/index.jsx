import React from 'react'
import css from './index.scss'

const SectionTitle = ({
  titleTop, titleBottom, iconUrl, slolganMain, sloganDescription,
}) => (
  <div className={css['section-title']}>
    <div className={css['title-area']}>
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
    <div className={css['slogan-area']}>
      <div className={css['slogan-area-main']}> {slolganMain}</div>
      <div className={css['slogan-area-description']}>{sloganDescription}</div>
    </div>
  </div>
)

export default SectionTitle
