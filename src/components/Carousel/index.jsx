import React from 'react'

import NukaCarousel from 'nuka-carousel'

import css from './index.scss'

const Carousel = ({
  children,
  autoplay = true,
  autoplayInterval = 3000,
  slideIndex = 0,
  transitionMode = 'fade',
  width = '100vw',
  withoutControls = false,
  swiping = true,
  speed = 500,
}) => (
  <NukaCarousel
    autoplay={autoplay}
    autoplayInterval={autoplayInterval}
    slideIndex={slideIndex}
    transitionMode={transitionMode}
    width={width}
    withoutControls={withoutControls}
    swiping={swiping}
    speed={speed}
    className={css.carousel}
  >
    {children}
  </NukaCarousel>
)

export default Carousel
