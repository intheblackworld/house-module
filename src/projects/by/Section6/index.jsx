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
    bg: `${require('./area6_bg1.jpg')}`,
    img: `${require('./area6_img1.jpg')}`,
    title: '飛天雄獅百年神獸 家族守護之神',
    desc:
      '基座上緣的飛天翼獅，起源於中世紀歐洲貴族御用的動物圖騰，因為獅子是萬獸之王，亦是高貴、雄壯、勇氣、王者風範的具體象徵，兼具力量與眼界，儼然偉大建築的守護者，無形中也與安平當地傳統的鎮宅吉祥獸-－劍獅、風獅爺趣味呼應。',
  },
  {
    bg: `${require('./area6_bg2.jpg')}`,
    img: `${require('./area6_img2.jpg')}`,
    title: '女神的代表',
    desc: '王者的象徵，永恆的權力!更代表不同的祝福意義!',
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
  return (
    <div>
      <div className={withTrans('bg', c, show)}>
        <div className={c.mask} />
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
                <div className={c.frame}>
                  <img
                    key={slide.img}
                    className={`${c.itemImg} ${index === imgIndex ? c.active : ''}`}
                    src={slide.img}
                    alt="博悅的圖片"
                  />
                </div>
                <div className={c.text}>
                  <h3 className={c.title}>{slide.title}</h3>
                  <p className={c.desc}>{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={c.leftBtn} onClick={addIndex} onKeyDown={addIndex}>
            <img src={require('./mobile_arrowLeft.png')} alt="博悅的圖片" className={c.left} />
          </div>
          <div className={c.rightBtn} onClick={decIndex} onKeyDown={decIndex}>
            <img src={require('./mobile_arrowRight.png')} alt="博悅的圖片" className={c.right} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
