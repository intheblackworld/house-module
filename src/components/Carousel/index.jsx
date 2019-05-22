import React from 'react'

import Slider from 'react-slick'

import css from './index.scss'

const Carousel = ({
  children,
  autoplay = true,
  autoplaySpeed = 3000,
  draggable = false,
  fade = true,
  easing = 'ease-in',
  infinite = true,
  dots = false,
  arrows = false,
  swipe = true,
  pauseOnHover = false,
  speed = 500,
  accessibility = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
  afterChange,
  beforeChange,
  vertical = false,
}) => (
  <Slider
    autoplay={autoplay}
    autoplaySpeed={autoplaySpeed}
    draggable={draggable}
    fade={fade}
    easing={easing}
    infinite={infinite}
    dots={dots}
    arrows={arrows}
    swipe={swipe}
    pauseOnHover={pauseOnHover}
    speed={speed}
    accessibility={accessibility}
    slidesToShow={slidesToShow}
    slidesToScroll={slidesToScroll}
    initialSlide={initialSlide}
    className={css.carousel}
    afterChange={afterChange}
    beforeChange={beforeChange}
    vertical={vertical}
  >
    {children}
  </Slider>
)

export default Carousel
