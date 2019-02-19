import React from 'react'
import cx from 'classnames'
import css from './index.scss'

const PolicyDialog = (props) => {
  const dialogClass = cx(css.dialog, {
    [css.show]: props.show,
  })
  return <div className={dialogClass}>隱私權政策</div>
}

export default PolicyDialog
