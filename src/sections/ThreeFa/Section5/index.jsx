import React from 'react'
import { Image } from 'semantic-ui-react'

import SectionTitle from 'components/SectionTitle'
import SectionSubTitle from 'components/SectionSubTitle'
import heart from 'assets/img/section5/heart.png'
import css from './index.scss'

const items = [
  {
    name: '綠態建築',
    desc: '讓建築與環境和諧共生營造永續居住環境',
    imgSrc: require('assets/img/section5/green-icon.png'),
  },

  {
    name: '音樂文創',
    desc: '攜手金革唱片，用音樂建築創造生活新態度',
    imgSrc: require('assets/img/section5/music-icon.png'),
  },

  {
    name: '品質嚴選',
    desc: '精選高品質建材配備用心把關值得您信賴',
    imgSrc: require('assets/img/section5/quality-icon.png'),
  },

  {
    name: '通風採光',
    desc: '堅持規劃地下室通風採光明亮生活每一處',
    imgSrc: require('assets/img/section5/wind-icon.png'),
  },
  {
    name: '飯店式管理',
    desc: '採用飯店規格物業管理包辦生活大小瑣事',
    imgSrc: require('assets/img/section5/manage-icon.png'),
  },
  {
    name: '安心保固',
    desc: '以責任感實踐品牌承諾細心守護您的家',
    imgSrc: require('assets/img/section5/safe-icon.png'),
  },
]

const Section5 = () => (
  <div className={css.section5}>
    {/* <div className={css['leaf-top']} />
    <div className={css['leaf-middle']} />
    <div className={css['leaf-bottom']} /> */}
    <SectionTitle
      titleTop="無敵安心"
      titleBottom="REASSURANCE"
      iconUrl={heart}
      slolganMain="三發安心保固 永續好宅指標"
      sloganDescription="上市公司口碑嚴選，加上精工品質與服務，就是要給你最安心的家！"
    />
    <div className={css.container}>
      <SectionSubTitle title="六大品牌理念" />
      <div className={css['container-detail']}>
        {items.map(item => (
          <div className={css['detail-item']} key={item.desc}>
            <div className={css['item-icon-wrap']}>
              <Image className={css['item-icon']} src={item.imgSrc} alt="" />
            </div>
            <div className={css['item-title']}>{item.name}</div>
            <p className={css['item-description']}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Section5
