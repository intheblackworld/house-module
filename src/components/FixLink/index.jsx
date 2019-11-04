import React, { useState } from 'react'
import ActivityDialog from 'components/ActivityDialog'
import cx from 'classnames'
import c from './index.scss'

const FixLink = () => {
  // 彈窗
  const [isShow, toggleDialog] = useState(false)
  const showDialog = () => {
    toggleDialog(!isShow)
  }
  const closeDialog = () => {
    toggleDialog(false)
  }
  const closeClass = cx(c.close, {
    [c.show]: isShow,
  })
  return (
    <div>
      <a className={c.fixLink} onClick={showDialog} onKeyDown={showDialog}>
        <img src={require('./icon.png')} alt="長虹天際的圖片" />
      </a>
      <ActivityDialog show={isShow} />
      <div className={closeClass} onClick={closeDialog} onKeyDown={closeDialog}>
        <img src={require('./close.png')} alt="" />
      </div>
    </div>
  )
}

export default FixLink
