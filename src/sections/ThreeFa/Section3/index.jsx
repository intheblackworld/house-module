import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'
import cx from 'classnames'

import home from './home.png'
import bg1 from '../Master/bg1.png'
import company1 from './company-1.png'
import company2 from './company-2.png'
import person1 from './person-1.png'
import person2 from './person-2.png'
import person3 from './person-3.png'
import person4 from './person-4.png'
import person5 from './person-5.png'
import cross from './cross.png'
import leaf1 from '../Master/leaf-left-top.png'
import leaf3 from '../Master/leaf-right-bottom.png'

import css from './index.scss'

const CompanyImgs = ({ show = false }) => {
  const imgClass = cx(css.imgs, {
    [css.show]: show,
    [css.hide]: !show,
  })
  const titleClass = cx(css.title, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <React.Fragment>
      <div className={imgClass}>
        <Image src={company1} alt="" />
        <Image src={cross} alt="" />
        <Image src={company2} alt="" />
      </div>
      <div className={titleClass}>
        <h3>豪宅團隊聯名齊鑄，就像王與后生活!</h3>
        <p>台北豪宅團隊點名首選，李兆嘉、張家豪建築師、老圃團隊、特墨設計，就是住的比別人豪！</p>
      </div>
    </React.Fragment>
  )
}

const BuildImgs = ({ show = false }) => {
  const buildingClass = cx(css.buildImg, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return <img src={bg1} alt="" className={buildingClass} />
}

const Slides = ({ show = false }) => {
  const sliderClass = cx(css.slider, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={sliderClass}>
      <Carousel slidesToShow={4} fade={false} arrows>
        <div className={css.sliderItem}>
          <Image src={person1} alt="" />
          <div className={css.sliderContent}>
            <h3>建築營照</h3>
            <p>
              三發產地 鍾俊榮 董事長 <br />
              三發產地 讓鶯歌響起迷人樂章
            </p>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={person2} alt="" />
          <div className={css.sliderContent}>
            <h3>總體規劃</h3>
            <p>
              李兆嘉建築師 <br />
              建築之美 首重與土地的完美融合
            </p>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={person3} alt="" />
          <div className={css.sliderContent}>
            <h3>外觀設計</h3>
            <p>
              MAG張家豪建築師 <br />
              為建築 譜出完美風采
            </p>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={person4} alt="" />
          <div className={css.sliderContent}>
            <h3>景觀設計</h3>
            <p>
              老圃團隊-合圃景觀 <br />
              構築真、善、美的生活空間
            </p>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={person5} alt="" />
          <div className={css.sliderContent}>
            <h3>公設設計</h3>
            <p>
              特墨 張真一設計師 <br />
              人們能互動 建築就能更溫熱
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
const Section3 = () => (
  <React.Fragment>
    <Image src={leaf1} alt="1" className={css.leaf1} />
    <Image src={leaf3} alt="1" className={css.leaf2} />
    <Viewport>
      <SectionTitle
        titleTop="三發丰悅"
        titleBottom="AESTHETICS"
        iconUrl={home}
        slolganMain="青年成家 超強首選"
        sloganDescription="三發上市品質╳金革唱片音韻╳豪宅黃金陣容"
      />
    </Viewport>
    <Viewport>
      <BuildImgs />
    </Viewport>
    <Viewport>
      <SectionTitle
        titleTop="上市保證"
        titleBottom="BRAND"
        iconUrl={home}
        slolganMain="三發地產上市公司，讓年輕的你更驕傲！"
        sloganDescription="上市公司品質保證更保心，加上金革唱片優雅音韻，品牌與品質的雙重加持，一次買最好！"
      />
    </Viewport>

    <Viewport>
      <CompanyImgs />
    </Viewport>

    <Viewport isBottom={false}>
      <Slides />
    </Viewport>
    <div style={{ clear: 'both' }} />
  </React.Fragment>
)

export default Section3
