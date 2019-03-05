import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import cx from 'classnames'

import logo from './logo.png'
import menu from './menu-btn.png'

import css from './index.scss'

const PCNavigationHeight = 60
const TabletNavigationHeight = 60
const MobileNavigationHeight = 60

const NavItems = [
  {
    name: '超級任務',
    imgSrc: '',
    section: 'point2',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '追片看明星',
    imgSrc: '',
    section: 'point3',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '鐵粉來踩點',
    imgSrc: '',
    section: 'point4',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '新星領航員',
    imgSrc: '',
    section: 'point5',
    OffsetValue: -PCNavigationHeight,
  },
  {
    name: '挑戰成功',
    imgSrc: '',
    section: 'point6',
    OffsetValue: -PCNavigationHeight,
  },

  {
    name: '注意事項',
    imgSrc: '',
    section: 'point7',
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
            <div className={css.logo}>
              <Link to="master" spy smooth duration={500} offset={-PCNavigationHeight} key="master">
                <Image src={logo} alt="新板巨星的圖片" />
              </Link>
            </div>
            <div
              className={css.menu}
              role="presentation"
              onKeyDown={toggleSidebar}
              onClick={toggleSidebar}
            >
              <Image src={menu} alt="新板巨星的圖片" />
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
                      <span>{item.name}</span>
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
