import { withTrans } from 'utils'
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
      <p className={right && c.right}>{desc}</p>
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
        <p>
          NO.1【得天獨厚的蛋黃位置】{isMobile && <br />}人口成長位新北之冠、新北及國門正中心位置
        </p>
        <p>NO.2【住宅商業的重鎮地理】{isMobile && <br />}重劃區主要商圈分布所在地</p>
        <p>NO.3【串聯北市及桃園機場】{isMobile && <br />}機捷線一手在握、放眼世界都心的利多</p>
        <p>NO.4【大口呼吸的綠色城市】{isMobile && <br />}綠覆率60%以上綠覆率全台之最</p>
      </div>
    )}

    {section === 3 && (
      <div className={c.desc}>
        <p>機不可失的七大好理由</p>
      </div>
    )}

    {section === 4 && (
      <div className={c.desc}>
        <p>【林口最高CP的機能宅】便利暢快的生活環境</p>
        <p>【富貴公園富人居】3千坪以上的綠地無垠做鄰居</p>
        <p>【雙塔式擎空建築】長虹XP&T地標落成眼見為憑</p>
        <p>【高級飯店式宅配空間】池畔餐廳 /多功能交誼區/廚藝教室/餐廳空間</p>
        <p>【私人招待所式高端奢華】戶外標準國際25米泳池，豪宅式泳池花園</p>
      </div>
    )}
    {section === 5 && (
      <div className={c.desc}>
        <p>【 悠然自得樂活場域 】健身空間落地式採光，悠閒慢跑看公園</p>
        <p>【 公設規劃一應俱全 】美式主題實木撞球檯，放肆玩樂不用出門去</p>
        <p>【雙塔式擎空建築】長虹XP&T地標落成眼見為憑</p>
        <p>【 揮灑生活多采多姿 】鋼琴館、桌球室、ktv、瑜珈室，全齡公設應有盡有</p>
        <p>【 盡享風格繽紛鉅獻 】雲端天際的空中花園，佇立高空享受天際人生</p>
      </div>
    )}
  </div>
)

export default null
