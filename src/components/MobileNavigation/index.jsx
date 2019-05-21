import React from 'react'
import { Link } from 'react-scroll'
import info from '../../info'
import c from './index.scss'

const MobileNavigation = () => {
  const { phone, googleLink, fbLink } = info
  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    window.location.href = `tel:${info.phone.replace('-', '')}`
    setTimeout(() => {
      window.location.href = 'phoneThanks'
    }, 1000)
  }
  return (
    <div className={c.mobileNavigation}>
      <a
        className={c.navItem}
        href={`tel:${phone.replace('-', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={redirectToPhoneThanks}
      >
        <img src={require('./phone.png')} alt="" className={c.navIcon} />
        <div className={c.label}>撥打電話</div>
      </a>
      <Link
        className={c.navItem}
        to="contact"
        spy
        smooth
        duration={500}
        offset={49}
        key="contact"
      >
        <img src={require('./pen.png')} alt="" className={c.navIcon} />
        <div className={c.label}>預約賞屋</div>
      </Link>
      <a
        className={c.navItem}
        href={fbLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require('./chat.png')} alt="" className={c.navIcon} />
        <div className={c.label}>FB諮詢</div>
      </a>
      <a className={c.navItem} href={googleLink} target="_blank" rel="noopener noreferrer">
        <img src={require('./map.png')} alt="" className={c.navIcon} />
        <div className={c.label}>地圖導航</div>
      </a>
    </div>
  )
}

export default MobileNavigation