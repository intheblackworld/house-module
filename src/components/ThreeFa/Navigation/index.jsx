import React, { useState } from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'

import logo from 'assets/img/navigation/logo.png'

import css from './index.scss'

const NavItems = [
  {
    name: '租不如買',
    imgSrc: require('assets/img/navigation/hand.png'),
    path: '#one',
  },

  {
    name: '上市保證',
    imgSrc: require('assets/img/navigation/house.png'),
    path: '#two',
  },

  {
    name: '最潮建築',
    imgSrc: require('assets/img/navigation/no1.png'),
    path: '#three',
  },

  {
    name: '無敵安心',
    imgSrc: require('assets/img/navigation/heart.png'),
    path: '#four',
  },
  {
    name: '預約賞屋',
    imgSrc: require('assets/img/navigation/pen.png'),
    path: '#five',
  },
]

const Navigation = () => {
  const [list] = useState(NavItems)
  return (
    <Container fluid className={css.navigation}>
      <Container>
        <Grid centered>
          <div className={css.logo}>
            <Image src={logo} alt="" />
          </div>
          <ul className={css.navlist}>
            {list
              && list.map(item => (
                <a href={item.path} key={item.name} className={css.link}>
                  <Image src={item.imgSrc} />
                  {item.name}
                </a>
              ))}
          </ul>
        </Grid>
      </Container>
    </Container>
  )
}

export default Navigation
