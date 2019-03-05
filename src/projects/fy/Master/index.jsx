import React from 'react'

import Carousel from 'components/Carousel'
import { Image } from 'semantic-ui-react'


import bg3 from './bg3.png'
import leaf1 from './leaf-left-top.png'
import leaf2 from './leaf-right-top.png'
import leaf3 from './leaf-right-bottom.png'

import css from './index.scss'

const Master = () => (
  <div className={css['master-carousel-wrap']}>
    <Image src={leaf1} alt="新板巨星的圖片" className={css.leaf1} />
    <Image src={leaf2} alt="新板巨星的圖片" className={css.leaf2} />
    <Image src={leaf3} alt="新板巨星的圖片" className={css.leaf3} />
    <Carousel>
      <div>
        <div className={css.imageTitle}>新板巨星</div>
        <div className={css.imgWrap}>
          <Image src={bg3} alt="新板巨星的圖片" className={css.bgImage} />
        </div>
        <div className={css.sealWrap}>
          <div className={css.seal}>
            全新完工
          </div>
          <div className={css.sealTitle}>買得起住最好</div>
        </div>
      </div>
      {/* <div>
        <div className={css.imgWrap}>
          <Image src={bg1} alt="新板巨星的圖片" className={css.bgImage} />
        </div>
        <h3>超低頭款，立即入住</h3>
      </div> */}
      <div className={css.smallTitle}>
        <div className={css.imgWrap}>
          <Image src={bg3} alt="新板巨星的圖片" className={css.bgImage} />
        </div>
        <h3>超低頭款，立即入住</h3>
        <h3>神祕百萬購屋金 等你拿</h3>
      </div>
    </Carousel>
  </div>
)

export default Master
