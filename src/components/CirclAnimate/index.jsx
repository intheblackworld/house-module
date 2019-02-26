import React from 'react'
import cx from 'classnames'

import css from './index.scss'

const CirclAnimate = ({ show }) => {
  const circleAnimateClass = cx(css.circle, {
    [css.show]: show,
  })
  return <div className={circleAnimateClass}>123</div>
}

export default CirclAnimate
