import React from 'react'

import css from './index.scss'

const Footer = () => (
  <div className={css.footer}>
    <img src={require('./lixinLogo.png')} alt="帝璽的圖片" />
    <a href=" https://www.h35.tw/admin/test/login.php" target="_blank">網頁製作</a>
  </div>
)

export default Footer
