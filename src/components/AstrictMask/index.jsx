import React from 'react'

import ReactSVG from 'react-svg'
import icon from 'assets/img/AstrictMask/icon.svg'
import css from './index.scss'

const Mask = () => (
  <div className={css.mask}>
    <ReactSVG src={icon} className={css.icon} />
    <p>請將裝置轉至橫式<br />體驗最佳瀏覽方式</p>
  </div>
)

export default Mask
