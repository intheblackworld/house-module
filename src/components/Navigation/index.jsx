import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import cx from 'classnames'

import logo from 'assets/img/navigation/logo.png'
import menu from './menu-btn.png'

import css from './index.scss'

const PCNavigationHeight = 80
const TabletNavigationHeight = 78
const MobileNavigationHeight = 49

const NavItems = [
  {
    name: '黃金地段',
    imgSrc: '',
    section: 'section3',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '十大優勢',
    imgSrc: '',
    section: 'section4',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '量身定製',
    imgSrc: '',
    section: 'section6',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '飯店公設',
    imgSrc: '',
    section: 'section7',
    OffsetValue: -PCNavigationHeight,
  },
  {
    name: '建築團隊',
    imgSrc: '',
    section: 'section8',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '營造精英',
    imgSrc: '',
    section: 'section9',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '五大貼心',
    imgSrc: '',
    section: 'section10',
    OffsetValue: -PCNavigationHeight,
  },
  {
    name: '預約賞屋',
    imgSrc: '',
    section: 'section11',
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

  return (
    <div className={css.navigation}>
      <Container fluid>
        <Container>
          <div className={css.nav}>
            <Link
              to="master"
              spy
              smooth
              duration={500}
              offset={-PCNavigationHeight}
              key="master"
            >
              <div className={css.logo}>
                <Image src={logo} alt="立信吾界的圖片" />
              </div>
            </Link>
            <div
              className={css.menu}
              role="presentation"
              onKeyDown={toggleSidebar}
              onClick={toggleSidebar}
            >
              <Image src={menu} alt="立信吾界的圖片" />
            </div>
            <div
              className={mask}
              role="presentation"
              onKeyDown={toggleSidebar}
              onClick={toggleSidebar}
            />
            <ul className={navlist}>
              {list
                && list.map((item, index) => (
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
                      <span>{item.name}</span>
                      {list.length - 1 !== index && <span className={css.divided}>|</span>}
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
