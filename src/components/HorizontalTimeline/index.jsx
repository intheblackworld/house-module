import React from 'react'

import HorizontalScroll from 'react-scroll-horizontal'

import css from './index.scss'
/* 水平時間軸元件 */
const HorizontalTimeline = () => {
  const child = { width: '30em', height: '200px', border: '1px solid red' }
  const parent = { width: '100vw', height: '200px' }
  return (
    <div className={css.horizontalTimeline}>
      <div>水平時間軸元件</div>
      <div style={parent}>
        <HorizontalScroll pageLock reverseScroll>
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
          <div style={child} />
        </HorizontalScroll>
      </div>
    </div>
  )
}

export default HorizontalTimeline
