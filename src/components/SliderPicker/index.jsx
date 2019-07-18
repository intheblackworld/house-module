/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
// import ViewPort from 'components/ViewPort'
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
import { isMobile } from '../../utils'
import c from './index.scss'

const SlidePicker = ({ show, slideList }) => {
  const [imgIndex, setImgIndex] = useState(0)
  const addIndex = () => {
    setImgIndex(imgIndex === slideList.length - 1 ? 0 : imgIndex + 1)
  }
  return (
    <div className={withTrans('slideContainer', c, show)}>
      {!isMobile && (
        <div className={c.slideView}>
          <img key={slideList[imgIndex].src} src={slideList[imgIndex].src} alt="正義聯盟的圖片" />
          <div className={c.slideTitle}>
            <h3>{slideList[imgIndex].desc}</h3>
          </div>
        </div>
      )}
      <div className={c.slideControl}>
        <Carousel
          fade={!!isMobile}
          vertical={!isMobile}
          arrows={isMobile}
          slidesToShow={isMobile ? 1 : 5}
          afterChange={addIndex}
          initialSlide={imgIndex}
        >
          {slideList.map((slide, index) => (
            <div key={slide.src}>
              <img
                src={slide.src}
                alt="正義聯盟的圖片"
                onKeyDown={() => setImgIndex(index)}
                onClick={() => setImgIndex(index)}
                className={`${c.slideImg} ${imgIndex === index && 'active'}`}
              />
            </div>
          ))}
        </Carousel>
        {isMobile && (
          <div className={c.arrows}>
            <h3>{slideList[imgIndex].desc}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default SlidePicker
