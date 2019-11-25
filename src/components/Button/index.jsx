import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './index.scss'

const Btn = ({
  children, icon, hoverEffect = 'flashTwice', link = '', back = false, click, type = ''
}) => {
  const BtnClass = cx(css.btn, {
    [css.flash]: hoverEffect === 'flash',
    [css.flashTwice]: hoverEffect === 'flashTwice',
  })

  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    window.location.href = link
    setTimeout(() => {
      window.location.href = 'phoneThanks'
    }, 1000)
  }

  const handleClick = (e) => {
    if (type === 'fbMessenger') {
      window.CF_FBMessenger()
    }
    if (type === 'fb') {
      window.CF_fb()
    }
  }

  return link ? (
    <a
      href={link}
      target={(link.includes('tel') || back) ? '' : '_blank'}
      rel="noopener noreferrer"
      className={BtnClass}
      onClick={link.includes('tel') ? redirectToPhoneThanks : handleClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </a>
  ) : (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <a className={BtnClass} onClick={click}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </a>
  )
}

export default Btn
