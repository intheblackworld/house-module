import React from 'react'

import Carousel from 'components/Carousel'
import { Image } from 'semantic-ui-react'

import bg1 from 'assets/img/master/bg1.png'
import bg3 from 'assets/img/master/bg3.png'
import leaf1 from 'assets/img/master/leaf-left-top.png'
import leaf2 from 'assets/img/master/leaf-right-top.png'
import leaf3 from 'assets/img/master/leaf-right-bottom.png'


import css from './index.scss'

const Master = () => (
  <div className={css['master-carousel-wrap']}>
    <Image src={leaf1} alt="三發丰悅的圖片" className={css.leaf1} />
    <Image src={leaf2} alt="三發丰悅的圖片" className={css.leaf2} />
    <Image src={leaf3} alt="三發丰悅的圖片" className={css.leaf3} />
    <Carousel>
      <div>
        <div className={css.imageTitle}>三發丰悅</div>
        <div className={css.imgWrap}>
          <Image src={bg3} alt="三發丰悅的圖片" className={css.bgImage} />
        </div>
        <div className={css.sealWrap}>
          <div className={css.seal}>
            全新完工
          </div>
          <div className={css.sealTitle}>買得起住最好</div>
        </div>
      </div>
      <div>
        <div className={css.imgWrap}>
          <Image src={bg1} alt="三發丰悅的圖片" className={css.bgImage} />
        </div>
        <h3>超低頭款，立即入住</h3>
      </div>
      <div>
        <div className={css.imgWrap}>
          <Image src={bg3} alt="三發丰悅的圖片" className={css.bgImage} />
        </div>
        <h3>神祕百萬購屋金</h3>
        <h3>等你拿</h3>
      </div>
    </Carousel>
  </div>
)

export default Master
