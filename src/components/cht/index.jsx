import { useState } from 'react'
import { withTrans } from 'utils'
import _ from 'lodash'
import Viewport from 'components/ViewPort'
import { Accordion, Icon } from 'semantic-ui-react'
import { isMobile } from '../../utils'
import c from './index.scss'

export const PreContainer = ({
  title1, title2, desc, show, src, right = false,
}) => (
  <div className={withTrans('preContainer', c, show)}>
    <div className={c.preTitle}>
      <h3>
        {title1}
        <br />
        {title2}
      </h3>
    </div>
    <div className={c.preImg}>
      <img src={src} alt="" />
      <p className={right ? c.right : ''}>{desc}</p>
    </div>
  </div>
)

export const DescContainer = ({ title, show, section }) => (
  <div className={withTrans('descContainer', c, show)}>
    <div className={c.title}>
      <h3>{title}</h3>
    </div>
    {section === 2 && (
      <div className={c.desc}>
        <p>【得天獨厚的蛋黃位置】{isMobile && <br />}人口成長位新北之冠、新北及國門正中心位置</p>
        <p>【住宅商業的重鎮地理】{isMobile && <br />}重劃區主要商圈分布所在地</p>
        <p>【串聯北市及桃園機場】{isMobile && <br />}機捷線一手在握、放眼世界都心的利多</p>
        <p>【大口呼吸的綠色城市】{isMobile && <br />}綠覆率60%以上綠覆率全台之最</p>
      </div>
    )}

    {section === 3 && (
      <div className={c.singleDesc}>
        <p>機不可失的七大好理由</p>
      </div>
    )}

    {section === 4 && (
      <div className={c.desc}>
        <p>【林口最高CP的機能宅】{isMobile && <br />}便利暢快的生活環境</p>
        <p>【富貴公園富人居】{isMobile && <br />}3千坪以上的綠地無垠做鄰居</p>
        <p>【雙塔式擎空建築】{isMobile && <br />}長虹XP&T地標落成眼見為憑</p>
        <p>【高級飯店式宅配空間】{isMobile && <br />}池畔餐廳 /多功能交誼區/廚藝教室/餐廳空間</p>
        <p>【私人招待所式高端奢華】{isMobile && <br />}戶外標準國際25米泳池，豪宅式泳池花園</p>
      </div>
    )}
    {section === 5 && (
      <div className={c.desc}>
        <p>【悠然自得樂活場域】{isMobile && <br />}健身空間落地式採光，悠閒慢跑看公園</p>
        <p>【公設規劃一應俱全】{isMobile && <br />}美式主題實木撞球檯，放肆玩樂不用出門去</p>
        <p>【揮灑生活多采多姿】{isMobile && <br />}鋼琴館、桌球室、ktv、瑜珈室，全齡公設應有盡有</p>
        <p>【盡享風格繽紛鉅獻】{isMobile && <br />}雲端天際的空中花園，佇立高空享受天際人生</p>
      </div>
    )}
  </div>
)

export const ListContainer = ({ list }) => {
  const groupList = _.chunk(list, 2)
  // eslint-disable-next-line react/no-array-index-key
  return groupList.map((group, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Viewport key={`group-${index}`}>
      {/* eslint-disable-next-line react/no-array-index-key */}
      <Row key={`group-${index}`} items={group} />
    </Viewport>
  ))
}

export const Row = ({ show, items }) => (
  <div className={withTrans('row', c, show)}>
    {items.map(item => (
      <div className={c.item} key={item.src}>
        <div className={`${c.label} flex-c`}>{item.label}</div>
        <img src={item.src} alt="" className={c.itemImg} />
        <div className={c.title}>{item.title}</div>
        <div className={c.desc}>{item.desc}</div>
      </div>
    ))}
  </div>
)

export const AccordionContainer = ({ show, list }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleIndex = (index) => {
    setActiveIndex(index)
  }
  return (
    <Accordion styled className={withTrans('accordion', c, show)}>
      {list.map((item, index) => (
        <div key={`accord-${item.src}`}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={() => handleIndex(index)}
          >
            <div>
              <div className={c.label}>{item.label}</div>
              <div>
                <div className={c.title}>{item.title}</div>
                <div className={c.desc}>{item.desc}</div>
              </div>
            </div>
            {item.title}
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <img src={list[0].src} alt="" />
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  )
}

export default null
