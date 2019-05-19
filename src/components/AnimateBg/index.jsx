import React from 'react'
import css from './index.sass'

const AnimateBg = () => (
  <div
    id="bg-wrap"
    style={{
      width: '100vw',
      // height: '100vh',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: 0,
    }}
  >
    <div className={css.parallelogram} id={css.one} />
    <div className={css.parallelogram} id={css.two} />
    <div className={css.parallelogram} id={css.three} />
    <div className={css.parallelogram} id={css.four} />
    <div className={css.parallelogram} id={css.five} />
    <div className={css.parallelogram} id={css.six} />
  </div>
)

export default AnimateBg
