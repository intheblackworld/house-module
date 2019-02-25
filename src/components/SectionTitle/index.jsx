import React from 'react'
import cx from 'classnames'
import css from './index.scss'

const SectionTitle = ({
  title, show, desc, desc2,
}) => {
  const sectionTitleClass = cx(css.sectionTitle, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={sectionTitleClass}>
      <div className={css.bg} />
      <h3 className={css.title}>{title}</h3>
      <p className={css.desc}>
        {desc}
        <br />
        {desc2}
      </p>
    </div>
  )
}

export default SectionTitle
