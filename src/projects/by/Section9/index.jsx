/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
import { isMobile } from '../../../utils'
// import Carousel from 'components/Carousel'
import c from './index.scss'

const slideList = [
  {
    label: 'Calm Scale',
    bg: `${require('./area9_img1.jpg')}`,
    title: '沈穩之韻  猶勝現代官邸',
    subTitle: '觀大器行止  品一世尊榮',
    desc:
      '生活是許多美好的總和，而體現的最高境界，就是打造最好的一切，用來寵愛主人與親愛家人，在這座工筆精湛的當代大宅裡，設計者精心提煉一切關於美的細節，轉化為生活品味的具體實踐，字裡行間巧妙引用微量新古典與現代簡約的交融，以沈穩的佈局、動線，描寫與眾不同的情境韻味。',
  },
  {
    label: 'Temperament Style',
    bg: `${require('./area9_img3.jpg')}`,
    title: '爾雅氣質系  風華獨具',
    subTitle: '微量和風語彙  純淨且自在',
    desc:
      '空間因人而生，各擁風情才是主人性格的真實寫照，基於現代新貴對於生活的高標要求，單純視覺上的美好，已然不足以迎合層峰需求，因此在設計師精心調和下，善用全案方正的室內格局加上流暢動線，賦予客、餐廳共享的深邃景深，而清爽恬靜的色彩、材質計畫，也為空間帶來舒適溫度與休閒感，賦予居宅活躍生命力。',
  },
  {
    label: 'Elegant Impression',
    bg: `${require('./area9_img5.jpg')}`,
    title: '新貴最愛  清雅時尚印象',
    subTitle: '剔透昶朗  戀上宅時光',
    desc:
      '空間風格從來沒有定論，僅是使用者的喜好表述，但透過設計者的精心轉譯，倒也能展現若干的藝術價值。不過若是單從生活面著眼，空間的定義不妨更精準，既能滿足現代的生活步調，也能融入不同文明的細膩，因此在本案佈局上以大量暖木色為主，穿插精緻格柵、鐵件、大理石等元素，在不斷出現的線性語彙裡，交疊豐富立體層次與表情。',
  },
]
const Section9 = ({ show }) => {
  const [imgIndex, setImgIndex] = useState(0)
  const addIndex = () => {
    setImgIndex(imgIndex === slideList.length - 1 ? 0 : imgIndex + 1)
  }

  const decIndex = () => {
    setImgIndex(imgIndex === 0 ? slideList.length - 1 : imgIndex - 1)
  }
  return (
    <div>
      {isMobile ? (
        <div className={withTrans('bg', c, show)}>
          {slideList.map((slide, index) => (
            <img
              key={slide.bg}
              className={`${c.slideImg} ${index === imgIndex ? c.active : ''}`}
              src={slide.bg}
              alt="博悅的圖片"
            />
          ))}
          <img
            className={`${c.btn} ${c.leftBtn}`}
            src={require('./mobile_arrowLeft.png')}
            alt="博悅的圖片"
            onClick={decIndex}
            onKeyDown={decIndex}
          />
          <img
            className={`${c.btn} ${c.rightBtn}`}
            src={require('./mobile_arrowRight.png')}
            alt="博悅的圖片"
            onClick={addIndex}
            onKeyDown={addIndex}
          />
          <div>
            {slideList.map((slide, index) => (
              <div key={slide.bg} className={`${c.content} ${index === imgIndex ? c.active : ''}`}>
                <p className={c.label}>{slideList[imgIndex].label}</p>
                <h3 className={c.title}>{slideList[imgIndex].title}</h3>
                <p className={c.subTitle}>{slideList[imgIndex].subTitle}</p>
                <p className={c.desc}>{slideList[imgIndex].desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={withTrans('bg', c, show)}>
          <div className={c.slider}>
            {slideList.map((slide, index) => (
              <img
                key={slide.bg}
                className={`${c.slideImg} ${index === imgIndex ? c.active : ''}`}
                src={slide.bg}
                alt="博悅的圖片"
              />
            ))}
            <div className={c.container}>
              {slideList.map((slide, index) => (
                <div key={slide.bg} className={`${c.item} ${index === imgIndex ? c.active : ''}`}>
                  <div className={c.mask}>
                    <p className={c.label}>{slideList[imgIndex].label}</p>
                    <h3 className={c.title}>{slideList[imgIndex].title}</h3>
                    <p className={c.subTitle}>{slideList[imgIndex].subTitle}</p>
                    <p className={c.desc}>{slideList[imgIndex].desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={c.btnGroup}>
              <div onClick={addIndex} onKeyDown={addIndex}>
                <img src={require('./triangle.png')} alt="博悅的圖片" className={c.left} />
              </div>
              <div onClick={decIndex} onKeyDown={decIndex}>
                <img src={require('./triangle.png')} alt="博悅的圖片" className={c.right} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Section9
