import React from 'react'

import FullScreen from 'components/FullScreen'
import Carousel from 'components/Carousel'
import { Image } from 'semantic-ui-react'

import bg1 from 'assets/img/master/bg-1.png'
import bg2 from 'assets/img/master/bg-2.png'
import bg3 from 'assets/img/master/bg-3.png'

import css from './index.scss'

const Master = () => (
  <FullScreen needCutHeader={false}>
    <Carousel>
      <Image src={bg1} alt="1" className={css.image} />
      <Image src={bg2} alt="2" className={css.image} />
      <Image src={bg3} alt="3" className={css.image} />
    </Carousel>
  </FullScreen>
)

export default Master
