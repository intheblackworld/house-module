import React from 'react'
import { Image } from 'semantic-ui-react'
import Viewport from 'components/ViewPort'
import cx from 'classnames'
import SectionTitle from 'components/SectionTitle'

import css from './index.scss'

const items = [
  {
    name: '十大建商信譽保證',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },

  {
    name: '十年防水完善保固',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },

  {
    name: '甲級營造品質保障',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },

  {
    name: '立信直營完善服務',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
  {
    name: '量身定製省時省錢',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
  {
    name: '豪宅團隊精鑄帝標',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
  {
    name: '近五千坪帝國廣場',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
  {
    name: '江翠F區領秀地段',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
  {
    name: '精雕細琢核心住宅',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
  {
    name: '連結台北市第一線',
    imgSrc: `https://via.placeholder.com/${74}x${74}`,
  },
]

const Item = ({ show, item }) => {
  const itemClass = cx(css['detail-item'], {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={itemClass} key={item.desc}>
      <div className={css['item-icon-wrap']}>
        <Image className={css['item-icon']} src={item.imgSrc} alt="" />
      </div>
      <h3 className={css['item-title']}>{item.name}</h3>
    </div>
  )
}
const Section4 = () => (
  <div className={css.section4}>
    <Viewport>
      <SectionTitle
        title="十大優勢 必買首選"
      />
    </Viewport>

    <div className={css.container}>
      <div className={css['container-detail']}>
        {items.map(item => (
          <Viewport key={item.name}>
            <Item item={item} />
          </Viewport>
        ))}
      </div>
    </div>
  </div>
)

export default Section4
