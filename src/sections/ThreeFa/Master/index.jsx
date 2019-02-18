import React from 'react'

import Carousel from 'components/Carousel'
import { Image } from 'semantic-ui-react'

import bg1 from 'assets/img/master/bg-1.png'
import bg2 from 'assets/img/master/bg-2.png'
import bg3 from 'assets/img/master/bg-3.png'

import css from './index.scss'

const Master = () => (
  <Carousel>
    <div>
      <Image src={bg1} alt="1" className={css.image} />
    </div>
    <div>
      <Image src={bg2} alt="2" className={css.image} />
    </div>
    <div>
      <Image src={bg3} alt="3" className={css.image} />
    </div>
  </Carousel>
)

export default Master
