import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'
import cx from 'classnames'

// import home from 'assets/img/section3/home.png'
// import company1 from 'assets/img/section3/company-1.png'
// import company2 from 'assets/img/section3/company-2.png'
// import person1 from 'assets/img/section3/person-1.png'
// import person2 from 'assets/img/section3/person-2.png'
// import person3 from 'assets/img/section3/person-3.png'
// import person4 from 'assets/img/section3/person-4.png'
// import person5 from 'assets/img/section3/person-5.png'
// import cross from 'assets/img/section3/cross.png'
// import leaf1 from 'assets/img/master/leaf-left-top.png'
// import leaf3 from 'assets/img/master/leaf-right-bottom.png'

import css from './index.scss'

// const CompanyImgs = ({ show = false }) => {
//   const imgClass = cx(css.imgs, {
//     [css.show]: show,
//     [css.hide]: !show,
//   })
//   const titleClass = cx(css.title, {
//     [css.show]: show,
//     [css.hide]: !show,
//   })
//   return (
//     <React.Fragment>
//       <div className={imgClass}>
//         <Image src={company1} alt="立信吾界的圖片" />
//         <Image src={cross} alt="立信吾界的圖片" />
//         <Image src={company2} alt="立信吾界的圖片" />
//       </div>
//       <div className={titleClass}>
//         <h3>豪宅團隊聯名齊鑄，就像王與后生活!</h3>
//         <p>台北豪宅團隊點名首選，李兆嘉、張家豪建築師、老圃團隊、特墨設計，就是住的比別人豪！</p>
//       </div>
//     </React.Fragment>
//   )
// }

const Slides = ({ show = false }) => {
  const sliderClass = cx(css.slider, {
    [css.show]: show,
    [css.hide]: !show,
  })
  const width = document.getElementById('master').offsetWidth
  let slideLength = 5
  let initialSlide = 1
  if (width <= 768) {
    slideLength = 3
    initialSlide = 2
  }
  if (window.navigator.userAgent.match(/iPad/i) != null) {
    slideLength = 4
  }
  return (
    <div className={sliderClass}>
      <Carousel
        slidesToShow={slideLength}
        fade={false}
        autoplay
        initialSlide={initialSlide}
      >
        <div className={css.sliderItem}>
          <Image src={require('./person1.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>建築大師 國泰御用 豪宅器度 精鑄帝標</p>
            <h3>建築師 葛介南</h3>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={require('./person2.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>結構權威 耐震行家 國泰指定 冠德信賴</p>
            <h3>結構技師 劉國欽</h3>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={require('./person3.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>工程精英 豪宅實力 優秀品質</p>
            <h3>工務協理 馮志華</h3>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={require('./person4.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>英雄盛會 獨領風騷 雄霸江翠</p>
            <h3>董事長 賴運興</h3>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={require('./person5.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>工程精英 豪宅實力 優秀品質</p>
            <h3>工務經理 劉春平</h3>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={require('./person6.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>公設名家 華人之光 金獎名家 橫掃亞太</p>
            <h3>主持設計師 許家福</h3>
          </div>
        </div>
        <div className={css.sliderItem}>
          <Image src={require('./person7.png')} alt="立信吾界的圖片" />
          <div className={css.sliderContent}>
            <p>公設名家 華人之光 金獎名家 橫掃亞太</p>
            <h3>主持設計師 林之豐</h3>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
const Section3 = () => (
  <React.Fragment>
    <Viewport>
      <SectionTitle title="豪宅黃金陣容 亞太金獎團隊" />
    </Viewport>

    <Viewport isBottom={false}>
      <Slides />
    </Viewport>
    <div style={{ clear: 'both' }} />
  </React.Fragment>
)

export default Section3
