import React from 'react'
import cx from 'classnames'
import css from './index.scss'

const SectionSubtitle = ({ title, show }) => {
  const subTitleClass = cx(css.subTitle, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={subTitleClass}>
      <h3>{title}</h3>
      <div className={css.subTitleImg} />
    </div>
  )
}

export default SectionSubtitle
