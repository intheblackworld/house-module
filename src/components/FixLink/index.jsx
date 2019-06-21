import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
        <img src={require('./wj_icon.png')} alt="帝璽的圖片" />
      </a>
      <ActivityDialog show={isShow} />
      <div className={closeClass} onClick={closeDialog} onKeyDown={closeDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  )
}

export default FixLink
