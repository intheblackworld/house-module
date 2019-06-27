/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
// import { isMobile } from '../../../utils'
// import Carousel from 'components/Carousel'
import c from './index.scss'

const slideList = [
  {
    title1: '雕刻靈魂',
    title2: '雕花窗框 細緻之美',
    desc1:
      '當建築家與藝術家以精準眼光，和一顆挑戰不可能建築的心，便能賦予它靈魂，駐留世上成為永傳不朽的藝術真品。',
    desc2: '倒角、窗框、柱頭、雕花造型，真材實料打造，最少須費時一年半以上的時間才能組裝完工。',
  },
  {
    title1: '全球獨步 繁複之美',
    title2: '手工打鑿 雕飾之美',
    desc1: '為此柱頭，飛向國外聘請泥塑師傅雕模實品模擬雄偉靈氣，以減少石匠雕工誤差，慢慢打鑿而成。',
    desc2: '每塊石材均由國外進口，一律排序出廠，塊塊價值連城，造價可觀，人力更是難以估算！',
  },
]
const Section3 = ({ show }) => {
  const [imgIndex, setImgIndex] = useState(0)
  const addIndex = () => {
    setImgIndex(imgIndex === slideList.length - 1 ? 0 : imgIndex + 1)
  }

  const decIndex = () => {
    setImgIndex(imgIndex === 0 ? slideList.length - 1 : imgIndex - 1)
  }

  const [openIndex, setOpenIndex] = useState(1)

  const handleOpenIndex = (index) => {
    setOpenIndex(index)
  }
  return (
    <div>
      <div className={withTrans('bg', c, show)}>
        <div className={c.slider}>
          {slideList.map((slide, index) => (
            <div
              className={`${c.container} ${index === imgIndex ? c.active : ''}`}
              key={slide.title1}
            >
              <div className={`${c.slideItem} slide-${index + 1}-1`}>
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
              </div>
              <div className={`${c.slideItem} slide-${index + 1}-2`}>
                <div className={`${c.bottomMask} ${openIndex === 1 ? c.open : ''}`}>
                  <h3>{slide.title1}</h3>
                  <p>{slide.desc1}</p>
                  <img
                    className={openIndex !== 1 ? c.open : ''}
                    src={require('./plus.png')}
                    alt="博悅的圖片"
                    onClick={() => handleOpenIndex(1)}
                    onKeyDown={() => handleOpenIndex(1)}
                  />
                  <img
                    className={openIndex === 1 ? c.open : ''}
                    src={require('./minus.png')}
                    alt="博悅的圖片"
                    onClick={() => handleOpenIndex(-1)}
                    onKeyDown={() => handleOpenIndex(-1)}
                  />
                </div>
              </div>
              <div className={`${c.slideItem} slide-${index + 1}-3`}>
                <div className={`${c.topMask} ${openIndex === 2 ? c.open : ''}`}>
                  <h3>{slide.title2}</h3>
                  <p>{slide.desc2}</p>
                  <img
                    className={openIndex !== 2 ? c.open : ''}
                    src={require('./plus.png')}
                    alt="博悅的圖片"
                    onClick={() => handleOpenIndex(2)}
                    onKeyDown={() => handleOpenIndex(2)}
                  />
                  <img
                    className={openIndex === 2 ? c.open : ''}
                    src={require('./minus.png')}
                    alt="博悅的圖片"
                    onClick={() => handleOpenIndex(-1)}
                    onKeyDown={() => handleOpenIndex(-1)}
                  />
                </div>
              </div>
            </div>
          ))}

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
    </div>
  )
}

export default Section3
