import React from 'react'

import css from './index.scss'

const SectionSubtitle = ({ title }) => (
  <div className={css.subTitle}>
    <h3>{title}</h3>
    <div className={css.subTitleImg} />
  </div>
)

export default SectionSubtitle
