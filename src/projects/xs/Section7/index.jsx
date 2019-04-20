/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const list = [
  {
    src: require('./item-1.png'),
    p1: '明治府｜',
    p2: '萬華第一座隔震建築',
    p3: '32顆LRB隔震墊',
    p4: '抗震達六級以上',
  },
  {
    src: require('./item-2.png'),
    p1: '新碩華悅｜',
    p2: 'SC鋼骨結構',
    p3: '94組ITT制震阻尼器',
    p4: '抗震達六級',
  },
  {
    src: require('./item-3.png'),
    p1: '故宮博物院｜',
    p2: '耐震提升工程',
    p3: 'Viscous Damper阻尼器140組',
    p4: '',
  },
  {
    src: require('./item-4.png'),
    p1: '台中慈濟醫院｜',
    p2: '455組LRB隔震墊',
    p3: '全球規模最大之醫療防震建築',
    p4: '抗震達七級',
  },
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
        <h3 className={c.specialTitle}>
          隔制震業績
        </h3>
      </div>
      {isMobile ? (
        <div className={c.carousel}>
          <Carousel slidesToShow={1} fade={false} dots>
            {list.map(item => (
              <img src={item.src} alt="" className={c.slide} key={item.src} />
            ))}
          </Carousel>
        </div>
      ) : (
        <div className={c.content}>
          {list.map(item => (
            <div className={c.item} key={item.src}>
              <img src={item.src} alt="" />
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
              <p>{item.p4}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Section6
