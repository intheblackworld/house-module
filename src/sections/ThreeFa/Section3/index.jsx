import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'

import home from 'assets/img/section3/home.png'
import company1 from 'assets/img/section3/company-1.png'
import company2 from 'assets/img/section3/company-2.png'
import person1 from 'assets/img/section3/person-1.png'
import person2 from 'assets/img/section3/person-2.png'
import person3 from 'assets/img/section3/person-3.png'
import person4 from 'assets/img/section3/person-4.png'
import person5 from 'assets/img/section3/person-5.png'
import cross from 'assets/img/section3/cross.png'

import css from './index.scss'

const Section3 = () => (
  <React.Fragment>
    <Viewport>
      <SectionTitle
        titleTop="上市保證"
        titleBottom="BRAND"
        iconUrl={home}
        slolganMain="三發地產上市公司，讓年輕的你更驕傲！"
        sloganDescription="上市公司品質保證更保心，加上金革唱片優雅音韻，品牌與品質的雙重加持，一次買最好！"
      />
    </Viewport>
    <div className={css.imgs}>
      <Image src={company1} alt="" />
      <Image src={cross} alt="" />
      <Image src={company2} alt="" />
    </div>
    <div className={css.title}>
      <h3>豪宅團隊聯名齊鑄，就像王與后生活!</h3>
      <p>台北豪宅團隊點名首選，李兆嘉、張家豪建築師、老圃團隊、特墨設計，就是住的比別人豪！</p>
    </div>
    <div className={css.slider}>
      <Carousel slidesToShow={4} fade={false}>
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
              老圃團隊 <br />
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
    <div style={{ clear: 'both' }} />
  </React.Fragment>
)

export default Section3
