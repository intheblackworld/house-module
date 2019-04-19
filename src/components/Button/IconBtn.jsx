import { Fragment } from 'react'
import css from './IconBtn.scss'

const IconBtn = ({
  children, width, link, fontSize,
}) => (
  <div className={css.iconBtn} style={{ width }}>
    {link ? (
      <a className={css.link} href={link} target="_blank" rel="noopener noreferrer">
        <div className={css.desc} style={{ fontSize }}>{children}</div>
        <img className={css.icon} src={require('./icon.png')} alt="" />
      </a>
    ) : (
      <Fragment>
        <div className={css.desc}>{children}</div>
        <img className={css.icon} src={require('./icon.png')} alt="" />
      </Fragment>
    )}
  </div>
)

export default IconBtn
