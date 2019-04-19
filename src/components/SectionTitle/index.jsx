import React from 'react'
import cx from 'classnames'
import css from './index.scss'

const SectionTitle = ({
  titleTop, titleBottom, iconUrl, slolganMain, sloganDescription, show,
}) => {
  const sectionTitleClass = cx(css['section-title'], {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={sectionTitleClass}>
      <div className={css['title-area']}>
        <div className={css.left} />
        <div className={css.middle}>
          <div className={css['icon-container']}>
            <img src={iconUrl} alt="" />
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
}

export default SectionTitle
