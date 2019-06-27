import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import cx from 'classnames'

import logo from './logo.png'
import menu from './menu-btn.png'
import close from './close.png'

import css from './by.scss'

const PCNavigationHeight = 0
const TabletNavigationHeight = 60
const MobileNavigationHeight = 45

const NavItems = [
  {
    name: '精華地段',
    imgSrc: '',
    subTitle: '',
    section: 'section2',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '永恆建築',
    imgSrc: '',
    subTitle: '',
    section: 'section5',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '奢華公設',
    imgSrc: '',
    subTitle: '',
    section: 'section8',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '實品屋',
    imgSrc: '',
    subTitle: '',
    section: 'section9',
    OffsetValue: -PCNavigationHeight,
  },
  {
    name: '預約賞屋',
    imgSrc: '',
    subTitle: '',
    section: 'contact',
    OffsetValue: -PCNavigationHeight,
  },
]

const menuStatus = false

const Navigation = () => {
  const [list, setListItemOffsetValue] = useState(NavItems)
  const [isShowMenu, setMenu] = useState(menuStatus)
  const toggleSidebar = () => {
    setMenu(!isShowMenu)
  }

  useEffect(() => {
    const wh = window.innerWidth
    let h
    if (wh <= 1024 && wh > 767) {
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

  const [isSmallLogo, setSmallLogo] = useState(false)

  // let prevScrollpos = window.pageYOffset
  // eslint-disable-next-line func-names
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 600) {
      setSmallLogo(true)
    } else {
      setSmallLogo(false)
    }
    // prevScrollpos = currentScrollPos
  }

  const mask = cx(css.mask, {
    [css.open]: isShowMenu,
  })

  return (
    <div className={css.navigation}>
      <Container fluid>
        <div className={`${css.logo} ${isSmallLogo ? css.small : ''}`}>
          <Link to="master" spy smooth duration={500} offset={-PCNavigationHeight} key="master">
            <Image src={logo} alt="博悅的圖片" />
          </Link>
        </div>
        <Container>
          <div className={css.nav}>
            <div
              className={css.menu}
              role="presentation"
              onKeyDown={toggleSidebar}
              onClick={toggleSidebar}
            >
              {isShowMenu ? (
                <Image src={close} alt="博悅的圖片" />
              ) : (
                <Image src={menu} alt="博悅的圖片" />
              )}
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
                  <Link
                    to={item.section}
                    spy
                    smooth
                    duration={500}
                    offset={item.OffsetValue}
                    key={item.section}
                  >
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
  )
}

export default Navigation
