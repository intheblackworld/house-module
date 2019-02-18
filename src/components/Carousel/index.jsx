import React from 'react'

import NukaCarousel from 'nuka-carousel'

import css from './index.scss'

const Carousel = ({
  children,
  autoplay = true,
  autoplayInterval = 5000,
  slideIndex = 0,
  transitionMode = 'fade',
  width = '100%',
  withoutControls = true,
  swiping = true,
  speed = 800,
  pauseOnHover = false,
  wrapAround = true,
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
    pauseOnHover={pauseOnHover}
    className={css.carousel}
    wrapAround={wrapAround}
  >
    {children}
  </NukaCarousel>
)

export default Carousel
