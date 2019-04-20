/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const imgList = [
  require('./item-1.png'),
  require('./item-2.png'),
  require('./item-3.png'),
  require('./item-4.png'),
  require('./item-5.png'),
]

const Section6 = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  return (
    <div className={c.bg}>
      <div className={containerClass}>
        <div className={c.title}>
          <h3>西門站750米 24hr家樂福商圈</h3>
          <p>西門商圈，台北最亮眼的國際級聖地，百貨精品、潮流品牌，文創小店等風華薈萃，</p>
          <p>同時也有著西本願寺、剝皮寮、青山宮等歷史建築聚落。</p>
          <p>【新碩鼎和】距捷運西門站僅750米，同時也鄰近桂林家樂福商圈，</p>
          <p>西門最閃耀的生活圈，讓每天都能隨意精彩。</p>
        </div>
        <div className={c.carousel}>
          <Carousel slidesToShow={1} fade={false} dots>
            {imgList.map(img => (
              <img src={img} alt="" className={c.slide} key={img} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Section6
