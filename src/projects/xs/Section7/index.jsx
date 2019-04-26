/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const topList = [
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
    src: require('./item-5.png'),
    p1: '大衛營｜',
    p2: '隔震工程規劃',
    p3: '全國第一棟隔震豪宅',
    p4: '抗震達六級',
  },
]

const bottomList = [
  {
    src: require('./item-6.png'),
    p1: '台北南山廣場｜',
    p2: 'TMD減震工程',
    p3: '兩組250頓調諧質量阻尼器',
    p4: '',
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
    src: require('./item-5.png'),
    p1: '大衛營｜',
    p2: '隔震工程規劃',
    p3: '全國第一棟隔震豪宅',
    p4: '抗震達六級',
  },
  {
    src: require('./item-6.png'),
    p1: '台北南山廣場｜',
    p2: 'TMD減震工程',
    p3: '兩組250頓調諧質量阻尼器',
    p4: '',
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
          <p>新碩建設，國內罕具深厚防震工程背景的公司，</p>
          <p>無需仰賴隔制震設備廠商之設計與維護，</p>
          <p>從營造、建設到防震工程規劃皆親力親為，</p>
          <p>提供全方位品質承諾，及隔震檢修服務。</p>
        </div>
        <h3 className={c.specialTitle}>- 隔制震業績 -</h3>
      </div>
      {isMobile ? (
        <div className={c.carousel}>
          <Carousel autoplaySpeed={5000} slidesToShow={1} fade={false} dots>
            {list.map(item => (
              <div key={item.src}>
                <img src={item.src} alt="" className={c.slide} />
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <p>{item.p4}</p>
                <p>{item.p5}</p>
                <p>{item.p6}</p>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className={c.content}>
          <div>
            {topList.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <p>{item.p4}</p>
              </div>
            ))}
          </div>
          <div>
            {bottomList.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <p>{item.p4}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Section6
