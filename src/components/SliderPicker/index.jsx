/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
// import ViewPort from 'components/ViewPort'
// import { isMobile } from '../../../utils'
import Carousel from 'components/Carousel'
import c from './index.scss'

const SlidePicker = ({ slideList }) => {
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <div className={c.slideContainer}>
      <div className={c.slideView}>
        <img key={slideList[imgIndex].src} src={slideList[imgIndex].src} alt="" />
        <div className={c.slideTitle}>{slideList[imgIndex].desc}</div>
      </div>
      <div className={c.slideControl}>
        <Carousel
          fade={false}
          slidesToShow={5}
          // afterChange={() => setImgIndex(imgIndex === slideList.length - 1 ? 0 : imgIndex + 1)}
        >
          {slideList.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt=""
              onKeyDown={() => setImgIndex(index)}
              onClick={() => setImgIndex(index)}
              className={`${c.slideImg} ${imgIndex === index && 'active'}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default SlidePicker
