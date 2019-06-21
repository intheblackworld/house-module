/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
// import { Element } from 'react-scroll'
import Viewport from 'components/ViewPort'
import Carousel from 'components/Carousel'
import c from './index.scss'
import { isMobile } from '../../../utils'
// const bgClass = withTrans('bg', c, show)
const hsList = [
  {
    src: require('./hs1.jpg'),
    title: '明日博',
  },
  {
    src: require('./hs2.jpg'),
    title: '信義帝寶',
  },
  {
    src: require('./hs3.jpg'),
    title: '宏盛陽明',
  },
  {
    src: require('./hs4.jpg'),
    title: '宏盛得意山莊',
  },
]

const chList = [
  {
    src: require('./ch1.jpg'),
    title: '世紀長虹',
  },
  {
    src: require('./ch2.jpg'),
    title: '長虹天璽',
  },
  {
    src: require('./ch3.jpg'),
    title: '長虹虹頂',
  },
  {
    src: require('./ch4.jpg'),
    title: '長虹虹觀',
  },
]

const pList = [
  {
    src: require('./p1.png'),
    title: '創意家行銷董事長',
    name: '王明正',
  },
  {
    src: require('./p2.png'),
    title: '建築師',
    name: '朱弘楠',
  },
  {
    src: require('./p3.png'),
    title: '建築師',
    name: '林弘壹',
  },
  {
    src: require('./p4.png'),
    title: '建築師',
    name: '金以容',
  },
  {
    src: require('./p5.png'),
    title: '顥斯設計總監',
    name: '劉官龍',
  },
  {
    src: require('./p6.png'),
    title: '寬衍室內設計總監',
    name: '王思敏',
  },
]
const Block1 = ({ show }) => {
  const blockClass = withTrans('block', c, show)
  return (
    <div className={blockClass}>
      <div className={`${c.title} ${c.center}`}>
        長虹建設 ，與世界建築同步創新的 「豪宅第一品牌」
      </div>
      <div className={`${c.desc} ${c.right}`}>
        誠信和品質是長虹建設40多年如一日的唯一堅持。這堅持讓長虹超越市場挑戰、無畏景氣，在專業上精益求精，每推出新案都能展現突破創新的能量及力道，成為客戶心中的”豪宅第一品牌”。
      </div>
      <Carousel slidesToShow={isMobile ? 1 : 4} fade={false} arrows={!isMobile}>
        {hsList.map(hs => (
          <div className={c.sliderItem} key={hs.title}>
            <img src={hs.src} alt="" />
            <div className={c.itemTitle}>{hs.title}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

const Block2 = ({ show }) => {
  const blockClass = withTrans('block', c, show)
  return (
    <div className={blockClass}>
      <div className={`${c.title} ${c.right}`}>
        宏盛建設，讓台灣建築榮登國際舞台的 「豪宅第⼀口碑」
      </div>
      <div className={`${c.desc} ${c.center}`}>
        仁愛帝寶、信義帝寶、宏盛陽明、宏盛得意山莊⋯，台北市心數一數二的鑽石地段，都有一座宏盛豪宅經典地標。亞洲10大豪宅的光環更是宏盛品牌實力的最佳見證。
      </div>
      <Carousel slidesToShow={isMobile ? 1 : 4} fade={false} arrows={!isMobile}>
        {chList.map(hs => (
          <div className={c.sliderItem} key={hs.title}>
            <img src={hs.src} alt="" />
            <div className={c.itemTitle}>{hs.title}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

const Block3 = ({ show }) => {
  const blockClass = withTrans('block', c, show)
  return (
    <div className={blockClass}>
      <div className={`${c.title} ${c.center}`}>「豪宅第一推手群」與時俱進共創新猷</div>
      <div className={`${c.desc} ${c.right}`}>
        創意家行銷、金以容建築師聯合事務所、結構安全 凱巨工程、公設空間 顥斯設計、景觀設計
        方極景觀，攜手打造未來世代超豪宅
      </div>
      <Carousel slidesToShow={isMobile ? 1 : 4} fade={false} arrows={!isMobile}>
        {pList.map(p => (
          <div className={c.sliderItem} key={p.title}>
            <img src={p.src} alt="" />
            <div className={c.pTitle}>
              <p>{p.title}</p>
              <h3>{p.name}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
const Section2 = () => (
  <div className={c.bg}>
    <div className={c.container}>
      <Viewport isBottom={false}>
        <Block1 />
      </Viewport>
      <Viewport isBottom={false}>
        <Block2 />
      </Viewport>
      <Viewport isBottom={false}>
        <Block3 />
      </Viewport>
    </div>
  </div>
)

export default Section2
