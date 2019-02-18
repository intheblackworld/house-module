import React from 'react'
import PropTypes from 'prop-types'

import css from './FullScreen.scss'

const FullScreen = (props) => {
  const { children } = props
  return <div className={css.fullScreen}>{children}</div>
}

FullScreen.defaultProps = {
  children: PropTypes.node,
}

export default FullScreen
