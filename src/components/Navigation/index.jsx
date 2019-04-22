import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import cx from 'classnames'

import { isMobile } from '../../utils'

import logo from './logo.png'
import menu from './menu-btn.png'

import css from './index.scss'

const PCNavigationHeight = 159
const TabletNavigationHeight = 129
const MobileNavigationHeight = 45

const NavItems = [
  {
    name: '建築美學',
    imgSrc: '',
    subTitle: '',
    section: 'point3',
    OffsetValue: 0,
  },

  {
    name: '隔震結構',
    imgSrc: '',
    subTitle: '',
    section: 'point5',
    OffsetValue: 0,
  },

  {
    name: '西域城心',
    imgSrc: '',
    subTitle: '',
    section: 'point6',
    OffsetValue: 0,
  },

  {
    name: '新碩建設',
    imgSrc: '',
    subTitle: '',
    section: 'point7',
    OffsetValue: 0,
  },
]

const menuStatus = false

const Navigation = ({ hasContactInfo = false, phone, googleLink }) => {
  const [list, setListItemOffsetValue] = useState(NavItems)
  const [isShowMenu, setMenu] = useState(menuStatus)
  const [isShowNavbar, setNavbar] = useState(true)
  const toggleSidebar = () => {
    setMenu(!isShowMenu)
  }

  let prevScrollpos = window.pageYOffset
  // eslint-disable-next-line func-names
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset
    if (prevScrollpos < currentScrollPos && currentScrollPos > 200) {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
    prevScrollpos = currentScrollPos
  }

  useEffect(() => {
    const wh = window.innerWidth
    let h
    if (wh < 1024 && wh > 767) {
      h = TabletNavigationHeight
    } else if (wh < 768) {
      h = MobileNavigationHeight
    } else {
      h = PCNavigationHeight
    }
    if (-h === list[list.length - 1].OffsetValue) return

    setListItemOffsetValue(
      list.map(item => ({
        ...item,
        OffsetValue: -h,
      })),
    )
  }, [list])

  const navlist = cx(css.navlist, {
    [css.open]: isShowMenu,
  })

  const mask = cx(css.mask, {
    [css.open]: isShowMenu,
  })

  const navigationClass = cx(css.navigation, {
    [css.hide]: !isShowNavbar,
  })

  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    if (isMobile) {
      window.location.href = `tel:${phone.replace('-', '')}`
    } else {
      return
    }
    setTimeout(() => {
      window.location.href = 'phoneThanks'
    }, 1000)
  }

  return (
    <React.Fragment>
      {isMobile && (
        <div className={css.contactNav}>
          <div className={css.item}>
            <a
              href={`tel:${phone.replace('-', '')}`}
              rel="noopener noreferrer"
              onClick={redirectToPhoneThanks}
            >
              {isMobile ? <img src={require('./phoneIcon.png')} alt="" /> : '立即來電：'}
              <span>{phone}</span>
            </a>
          </div>
          <div className={css.item}>
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
              <img src={require('./mapIcon.png')} alt="" />
              <span>地圖導航</span>
            </a>
          </div>
          <div className={css.item}>
            <Link to="order" spy smooth duration={500} offset={0} key="order">
              <img src={require('./orderIcon.png')} alt="" />
              <span>立即預約</span>
            </Link>
          </div>
        </div>
      )}
      <div className={navigationClass}>
        {!isMobile && hasContactInfo && (
          <div className={css.contactNav}>
            <div className={css.item}>
              <a
                href={`tel:${phone.replace('-', '')}`}
                rel="noopener noreferrer"
                onClick={redirectToPhoneThanks}
              >
                {isMobile ? <img src={require('./phoneIcon.png')} alt="" /> : '立即來電：'}
                <span>{phone}</span>
              </a>
            </div>
            <div className={css.item}>
              <a href={googleLink} target="_blank" rel="noopener noreferrer">
                <img src={require('./mapIcon.png')} alt="" />
                <span>地圖導航</span>
              </a>
            </div>
            <div className={css.item}>
              <Link to="order" spy smooth duration={500} offset={0} key="order">
                <img src={require('./orderIcon.png')} alt="" />
                <span>立即預約</span>
              </Link>
            </div>
          </div>
        )}
        <Container fluid>
          <Container>
            <div className={`${css.nav} ${hasContactInfo && css.hasContactNav}`}>
              <div className={css.logo}>
                <Link
                  to="master"
                  spy
                  smooth
                  duration={500}
                  offset={-PCNavigationHeight}
                  key="master"
                >
                  <Image src={logo} alt="" />
                </Link>
              </div>
              <div
                className={css.menu}
                role="presentation"
                onKeyDown={toggleSidebar}
                onClick={toggleSidebar}
              >
                <Image src={menu} alt="" />
              </div>
              <div
                className={mask}
                role="presentation"
                onKeyDown={toggleSidebar}
                onClick={toggleSidebar}
              />
              <ul className={navlist}>
                {list
                  && list.map(item => (
                    <Link to={item.section} spy smooth duration={500} offset={0} key={item.section}>
                      <span className={css.link}>
                        {item.imgSrc && <Image src={item.imgSrc} />}
                        <span>
                          <p className={css.title}>{item.name}</p>
                          <span className={css.subTitle}>{item.subTitle}</span>
                        </span>
                      </span>
                    </Link>
                  ))}
              </ul>
            </div>
          </Container>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Navigation
