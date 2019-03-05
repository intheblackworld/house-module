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
  pauseOnHover = false,
  speed = 500,
  accessibility = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
  afterChange,
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
    pauseOnHover={pauseOnHover}
    speed={speed}
    accessibility={accessibility}
    slidesToShow={slidesToShow}
    slidesToScroll={slidesToScroll}
    initialSlide={initialSlide}
    className={css.carousel}
    afterChange={afterChange}
  >
    {children}
  </Slider>
)

export default Carousel
