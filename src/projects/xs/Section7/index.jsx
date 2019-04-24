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
          <h3>防震建築巨擘－新碩建設</h3>
          <p>遠碩團隊－新碩建設是國內少數具有深厚防震工程背景的公司，</p>
          <p>不同於其他防震建築仰賴設備廠商之維護與設計，</p>
          <p>新碩建設精耕於營造、建設與防震技術領域之專業，</p>
          <p>提供全方位建築防震規劃與檢修能力。</p>
        </div>
        <h3 className={c.specialTitle}>- 隔制震業績 -</h3>
      </div>
      {isMobile ? (
        <div className={c.carousel}>
          <Carousel slidesToShow={1} fade={false} dots>
            {list.map(item => (
              <div key={item.src}>
                <img src={item.src} alt="" className={c.slide} />
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <p>{item.p4}</p>
              </div>
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
