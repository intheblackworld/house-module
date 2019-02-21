import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './index.scss'

const Btn = ({
  children, icon, hoverEffect = 'flashTwice', link = '', back = false,
}) => {
  const BtnClass = cx(css.btn, {
    [css.flash]: hoverEffect === 'flash',
    [css.flashTwice]: hoverEffect === 'flashTwice',
  })

  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    window.location.href = link
    setTimeout(() => {
      window.location.href = '#/phoneThanks'
    }, 1000)
  }

  return link ? (
    <a
      href={link}
      target={(link.includes('tel') || back) ? '' : '_blank'}
      rel="noopener noreferrer"
      className={BtnClass}
      onClick={link.includes('tel') ? redirectToPhoneThanks : () => null}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </a>
  ) : (
    <a className={BtnClass}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </a>
  )
}

export default Btn
