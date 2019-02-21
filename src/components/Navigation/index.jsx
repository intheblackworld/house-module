import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import cx from 'classnames'

import logo from 'assets/img/navigation/logo.png'
import menu from 'assets/img/navigation/menu-btn.png'

import css from './index.scss'

const NavItems = [
  {
    name: '租不如買',
    imgSrc: require('assets/img/navigation/hand.png'),
    path: '#one',
    section: 'section2',
    OffsetValue: -127,
  },

  {
    name: '上市保證',
    imgSrc: require('assets/img/navigation/house.png'),
    path: '#two',
    section: 'section3',
    OffsetValue: -127,
  },

  {
    name: '最潮建築',
    imgSrc: require('assets/img/navigation/no1.png'),
    path: '#three',
    section: 'section4',
    OffsetValue: -127,
  },

  {
    name: '無敵安心',
    imgSrc: require('assets/img/navigation/heart.png'),
    path: '#four',
    section: 'section5',
    OffsetValue: -127,
  },
  {
    name: '預約賞屋',
    imgSrc: require('assets/img/navigation/pen.png'),
    path: '#five',
    section: 'section6',
    OffsetValue: -127,
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
      h = 78
    } else if (wh < 768) {
      h = 49
    } else {
      h = 127
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
              <Image src={logo} alt="" />
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
                && list.map((item, index) => {
                  return (
                    <Link
                      to={item.section}
                      spy
                      smooth
                      duration={500}
                      offset={item.OffsetValue}
                      key={item.section}
                    >
                      <a href={item.path} key={item.name} className={css.link}>
                        <Image src={item.imgSrc} />
                        <span>{item.name}</span>
                        {list.length - 1 !== index && <span className={css.divided}>|</span>}
                      </a>
                    </Link>
                  )
                })}
            </ul>
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Navigation
