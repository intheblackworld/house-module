import React from 'react'

import css from './index.scss'

const Footer = ({ name = 'LIXIN DIGITAL' }) => (
  <div className={css.footer}>
    <p>{name}</p>
    <a href=" https://www.h35.tw/admin/test/login.php" target="_blank">網頁製作</a>
  </div>
)

export default Footer
