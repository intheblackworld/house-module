import React from 'react'
import css from './IconBtn.scss'

const IconBtn = ({ children }) => (
  <div className={css.iconBtn}>
    <div className={css.desc}>{children}</div>
    <img className={css.icon} src={require('./icon.png')} alt="" />
  </div>
)

export default IconBtn
