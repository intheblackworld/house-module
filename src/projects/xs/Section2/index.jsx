/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Viewport from 'components/ViewPort'
import { isMobile } from '../../../utils'
import c from './index.scss'

const itemList = [
  {
    src: require('./icon-1.png'),
    title: '安全，超乎期待',
    desc: '20組紐西蘭LRB鉛心橡膠隔震墊＋6支長衝程阻尼器，抗震係數0.32G，可抗至少六級強震。',
  },
  {
    src: require('./icon-2.png'),
    title: ' 西區，台北的根',
    desc:
      '捷運西門站750米，近擁24小時家樂福。歷史街區、西門商圈……，整個西區最繁華焦點都是你的勢力範圍。',
  },
  {
    src: require('./icon-3.png'),
    title: '經典，僅此一座',
    desc: '500坪珍貴黃金三角地，由建築大師李文勝操刀，鋪排出新舊交融的建築美學，凝鍊在地獨特魅力。',
  },
]

const ItemList = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  return (
    <div className={containerClass}>
      {itemList.map((item, index) => (
        <div className={c.item} key={item.title}>
          {isMobile && <img src={item.src} alt="" className={c.icon} />}
          <div className={isMobile ? 'flex-c' : 'flex-ac'}>
            {!isMobile && <img src={item.src} alt="" className={c.icon} />}
            {index === 2 ? <h3 className={`${c.itemTitle} ${c.itemTileF}`}>{item.title}</h3> : <h3 className={c.itemTitle}>{item.title}</h3>}
          </div>
          <p className={c.desc}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

const Section2 = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  return (
    <div className={bgClass}>
      <h3 className={c.title}>西區城心{isMobile ? <br /> : ' '}誠心鉅獻</h3>
      <Viewport isBottom={false}>
        <ItemList />
      </Viewport>
    </div>
  )
}
export default Section2
