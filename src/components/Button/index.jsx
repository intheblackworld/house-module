import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './index.scss'

const Btn = ({
  children, icon, hoverEffect = 'flashTwice', link,
}) => {
  const BtnClass = cx(css.btn, {
    [css.flash]: hoverEffect === 'flash',
    [css.flashTwice]: hoverEffect === 'flashTwice',
  })

  return (
    <a href={link || '#'} className={BtnClass}>
      {icon && <FontAwesomeIcon icon={icon} /> }
      {children}
    </a>
  )
}

export default Btn
