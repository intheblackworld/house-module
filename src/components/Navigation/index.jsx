import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import cx from 'classnames'

import logo from './logo.png'
import menu from './menu-btn.png'
// import info from '../../info'

import css from './index.scss'

const PCNavigationHeight = 80
const TabletNavigationHeight = 60
const MobileNavigationHeight = 45

const NavItems = [
  {
    name: '交通樞紐',
    imgSrc: '',
    subTitle: '',
    section: 'section2',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '精工團隊',
    imgSrc: '',
    subTitle: '',
    section: 'section4',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '帝制規格',
    imgSrc: '',
    subTitle: '',
    section: 'section5',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '黃金格局',
    imgSrc: '',
    subTitle: '',
    section: 'section7',
    OffsetValue: -PCNavigationHeight,
  },
  {
    name: '預約鑑賞',
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

  const mask = cx(css.mask, {
    [css.open]: isShowMenu,
  })

  return (
    <div className={css.navigation}>
      <Container fluid>
        <Container>
          <div className={css.nav}>
            <div className={css.logo}>
              <Link to="master" spy smooth duration={500} offset={-PCNavigationHeight} key="master">
                <Image src={logo} alt="帝璽的圖片" />
              </Link>
            </div>
            <div
              className={css.menu}
              role="presentation"
              onKeyDown={toggleSidebar}
              onClick={toggleSidebar}
            >
              <Image src={menu} alt="帝璽的圖片" />
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
            {/* <div className={css.phoneNumber}>
              <p>貴賓專線</p>
              <h3>{info.phone}</h3>
            </div> */}
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Navigation
