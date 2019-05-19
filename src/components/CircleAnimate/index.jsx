import React, { useState, useRef, useEffect } from 'react'
import cx from 'classnames'

import css from './index.scss'

const itemList = [
  {
    desc: '客廳增設USB插座，貼近數位時代，免找變壓器，3C產品輕鬆充電',
    img: require('./item1.png'),
  },
  {
    desc:
      '客餐廳配置One Touch一鍵開關，整合全室電燈，出門一鍵關閉所有電燈，省時又方便。回家一開即亮，安全不摸黑',
    img: require('./item2.png'),
  },
  {
    desc:
      '汽車充電智慧概念宅，於地下室增設汽車充電座選配裝置，依您需求額外增加，使用便利，落實環保愛球',
    img: require('./item3.png'),
  },
  {
    desc: '貼心的廚具上櫃下拉系統，輕鬆將置物籃往下拉，放置物品更為友善',
    img: require('./item4.png'),
  },
  {
    desc: '體貼配備微烤爐，結合微波爐及烤箱，打造多元料理空間，讓您使用更得心應手',
    img: require('./item5.png'),
  },
]

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  })

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
    return false
  }, [delay])
}
const CirclAnimate = ({ show }) => {
  const circleAnimateClass = cx(css.circle, {
    [css.show]: show,
  })

  const [active, setActive] = useState(4)
  useInterval(() => {
    if (active === 0) {
      setActive(4)
    } else {
      setActive(active - 1)
    }
  }, 5000)
  // clearTimeout(timer) // eslint-disable-line
  // const timer = setTimeout(() => {
  //   console.log(active)
  //   if (active === 0) {
  //     setActive(4)
  //   } else {
  //     setActive(active - 1)
  //   }
  // }, 3000)

  const rotateClass = cx(css.rotate, {
    [css.first]: active === 0,
    [css.second]: active === 4,
    [css.third]: active === 3,
    [css.fourth]: active === 2,
    [css.fifth]: active === 1,
  })

  const { desc } = itemList[active]

  const handleClick = (index) => {
    setActive(index)
    // console.log('click', active)
  }

  return (
    <div className={circleAnimateClass}>
      <div className={rotateClass}>
        {itemList.map((item, index) => {
          const itemClass = cx(css.item, {
            [css.active]: index === active,
          })

          return (
            <div
              className={itemClass}
              onKeyDown={() => {
                handleClick(index)
              }}
              onClick={() => {
                handleClick(index)
              }}
              key={item.img}
            >
              <img src={item.img} alt="立信吾界的圖片" />
            </div>
          )
        })}
      </div>
      <div className={css.desc}>{desc}</div>
      <div className={css.staticContent}>
        {itemList.map(item => (
          <div className={css.staticItem} key={item.desc}>
            <div className={css.staticImg}>
              <img src={item.img} alt="立信吾界的圖片" />
            </div>
            <div className={css.staticDesc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CirclAnimate
