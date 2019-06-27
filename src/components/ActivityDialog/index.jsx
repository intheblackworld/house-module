import React from 'react'
import cx from 'classnames'
import { isMobile } from '../../utils'
import c from './index.scss'

const ActivityDialog = (props) => {
  const dialogClass = cx(c.dialog, {
    [c.show]: props.show,
  })
  return (
    <div className={dialogClass}>
      <img className={c.dialogImage} src={isMobile ? require('./am1.jpg') : require('./a1.jpg')} alt="博悅的圖片" />
    </div>
  )
}

export default ActivityDialog
