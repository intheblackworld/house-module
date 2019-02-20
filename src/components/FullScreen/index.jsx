import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import css from './index.scss'

const FullScreen = (props) => {
  const className = cx(css.fullScreen, {
    [css.cutHeader]: props.needCutHeader || false,
    [css.alignCenter]: props.alignCenter || false,
  })
  const { children } = props
  return <div className={className}>{children}</div>
}

FullScreen.defaultProps = {
  children: PropTypes.node,
}

export default FullScreen
