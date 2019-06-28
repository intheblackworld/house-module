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
    src: `${require('./slide1.jpg')}`,
  },
  {
    src: `${require('./slide2.jpg')}`,
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
      <div className={withTrans('container', c, show)}>
        <div className={c.bg}>
          <div className={c.content}>
            <h3 className={c.subTitle}>construct</h3>
            <h3 className={c.title}>重大建設發展核心</h3>
            <hr />
            <div className={c.desc}>
              座落永華市政特區內的文教核心區，基地賞景條件良好，對外交通
              順暢便利，可迅速連通永華路、中華西路、濱海公路與86號快速道
              路，同時政府重大建設計劃持續推動，包括安平自由貿易港區、台
              南運河星鑽計畫區、安平歷史風貌園區、濱海遊憩園區與觀光商業
              區等，更是這一波重劃區當中，位在永華市政特區內，核心中的核 心地段最受矚目！
            </div>
          </div>
        </div>
        <div className={c.slider}>
          {slideList.map((slide, index) => (
            <img
              key={slide.src}
              className={`${c.slideImg} ${index === imgIndex ? c.active : ''}`}
              src={slide.src}
              alt="博悅的圖片"
            />
          ))}
          <div className={c.btnGroup}>
            <div onClick={decIndex} onKeyDown={decIndex}>
              <img src={require('./triangle.png')} alt="博悅的圖片" className={c.left} />
            </div>
            <div onClick={addIndex} onKeyDown={addIndex}>
              <img src={require('./triangle.png')} alt="博悅的圖片" className={c.right} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
