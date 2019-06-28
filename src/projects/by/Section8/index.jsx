/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { withTrans } from 'utils'
// import cx from 'classnames'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
// import { isMobile } from '../../../utils'
// import Carousel from 'components/Carousel'
import c from './index.scss'

const list = [
  {
    title: 'LOBBY',
    desc: '歡迎優雅，謝絕拘謹，以高貴悅目，以經典賞心，媲美歐洲皇家建築豪奢，盡顯不凡！',
    src: require('./area8_img1.jpg'),
  },
  {
    title: '門廳',
    desc:
      '一旦進入挑高超過八米的迎賓大廳，宏偉絢麗指數尤勝真正城堡！另一側則安排詩情畫意的鋼琴Lounge Bar，空氣中瀰漫著不可思議的浪漫！',
    src: require('./area8_img2.jpg'),
  },
  {
    title: '宴會廳/貴族鐵板燒',
    desc:
      '可容納十餘人同桌用餐的皇家宴會廳，作主人的更顯十足體面！專業級的鐵板燒餐廳、外燴廚房都是一般住宅公設少見的奢華設施！',
    src: require('./area8_img3.jpg'),
  },
  {
    title: '空中Lounge Bar',
    desc: 'Lounge Bar視野棒極了！戲水過後閑坐在精緻吧檯邊的那個瞬間，絕對是無價的幸福時刻。',
    src: require('./area8_img4.jpg'),
  },
  {
    title: '空中無邊際泳池',
    desc:
      '頂樓無疑是景觀最佳的位置，一方長形沁涼泳池，享受世外桃源般的寧靜，細品優游碧波、身心舒暢的美好時光！',
    src: require('./area8_img5.jpg'),
  },
]
const Section4 = ({ show }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const addIndex = () => {
    setSlideIndex(slideIndex === list.length - 1 ? 0 : slideIndex + 1)
  }

  const decIndex = () => {
    setSlideIndex(slideIndex === 0 ? list.length - 1 : slideIndex - 1)
  }
  return (
    <div className={c.bg}>
      <img className={c.bgItem} src={require('./area8_bg.png')} alt="" />
      <div className={withTrans('container', c, show)}>
        <div className={c.top}>
          <h3 className={c.subTitle}>GRAND HOTEL</h3>
          <h3 className={c.title}>媲美五星飯店的執著</h3>
          <div className={c.hint}>層峰歡聚，獨享啜飲，享受極選公設禮遇，最值錢的就是時間。</div>
          <div className={c.tab}>
            {list.map((item, index) => (
              <li
                className={`${index === slideIndex ? c.active : ''}`}
                key={item.src}
                onClick={() => setSlideIndex(index)}
                onKeyDown={() => setSlideIndex(index)}
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className={`${c.room} area8-room-${slideIndex + 1}`}>
          <img className={`${c.btn} ${c.leftBtn}`} src={require('./mobile_arrowLeft.png')} alt="博悅的圖片" onClick={decIndex} onKeyDown={decIndex} />
          <img className={`${c.btn} ${c.rightBtn}`} src={require('./mobile_arrowRight.png')} alt="博悅的圖片" onClick={addIndex} onKeyDown={addIndex} />
          <div className={c.border}>
            <h3>{list[slideIndex].title}</h3>
          </div>
        </div>
        <li className={c.desc}>
          <span>{list[slideIndex].desc}</span>
        </li>
      </div>
    </div>
  )
}

export default Section4
