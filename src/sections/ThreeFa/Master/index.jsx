import React from 'react'
import cx from 'classnames'
import css from './index.scss'

const Master = ({ show }) => {
  const masterClass = cx(css.master, {
    [css.show]: show,
    [css.hide]: !show,
  })

  return (
    <div className={masterClass}>
      <div className={css.bg} />
      <div className={css.logo}>
        <div className={css.logo1} />
        <div className={css.logo2} />
        <div className={css.logo3} />
      </div>
      <div className={css.light} />
      <div className={css.text}>
        <h3 className={css.subTitle}>－新外灘計畫－</h3>
        <h3 className={css.title}>縱橫天下 我的世界</h3>
      </div>
    </div>
  )
}

export default Master
