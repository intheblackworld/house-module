import { useState } from 'react'
import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import Carousel from 'components/Carousel'
import c from './index.scss'

const img1List = [
  require('./item-1-1.png'),
  // require('./item-1-2.png'),
  require('./item-1-2.png'),
  require('./item-1-3.png'),
]

const img2List = [require('./item-2-1.png'), require('./item-2-2.png'), require('./item-2-3.png')]

const Item1 = ({ show }) => {
  const itemClass = withTrans('item', c, show)
  const [index, setIndex] = useState(0)
  const locations = ['21世紀大樓', '新千歲空港', '頂埔捷運']
  return (
    <div className={itemClass}>
      <p className={c.label}>【岩田地崎建設株式会社】</p>
      <h3 className={c.title}>純正日本建築血統 百年國家建設推手</h3>
      <p className={c.desc}>
        已經有130年歷史的岩田地崎建設株式会社，
        或許對大多台灣人而言，這並不是一個一聽就耳熟能詳的名字，
        但對於日本在地人而言，岩田地崎是對於居住建築最踏實不過的承諾。
        屢獲日本建築大賞，國家級建設實力及日系精工管理不容分毫妥協，
        在台灣亦曾參與台北捷運、台灣高鐵…等重大工程。 首度跨足大台北重量級鉅作，將畫下永恆驚嘆號。
        <br />
        <br />
        【岩田地崎建設株式会社代表作】
        台北捷運板南線頂埔段、北海道新千歲空港大樓、神奈川潢濱21世紀地標大廈
      </p>
      <div className={c.slide}>
        <div className={c.carousel}>
          <Carousel
            slidesToShow={1}
            fade={false}
            afterChange={() => setIndex(index === locations.length - 1 ? 0 : index + 1)}
          >
            {img1List.map(url => (
              <img src={url} alt="博悅的圖片" key={url} />
            ))}
          </Carousel>
        </div>
        <div className={c.content}>
          <p className={c.location}>{locations[index]}</p>
        </div>
      </div>
    </div>
  )
}

const Item2 = ({ show }) => {
  const itemClass = withTrans('item', c, show)
  const [index, setIndex] = useState(0)
  const locations = ['德友極', '一巷青', '德友藏']
  return (
    <div className={itemClass}>
      <p className={c.label}>【德友建設機構】</p>
      <h3 className={c.title}>厚道人 厚實力 德友新厚工建築哲學</h3>
      <p className={c.desc}>
        台灣話說「厚工」指做事很費工，
        用在連續七年獲得臺灣誠信建商認證及建築金質獎肯定的德友建設上正是如此。
        深耕桃園數十載，德友首度跨足大台北，從精準的選地眼光、追求本質精良，
        德友建設從設計到建築都要比同業多花一倍的時間去琢磨， 只為創造經得起時間考驗的厚工建築，
        讓獨一與唯一成為最推崇的德友品牌價值。
        <br />
        <br />
        【德友建設機構代表作】 德友極、德友巨蛋、德友臻美、一巷青、築跡
      </p>
      <div className={c.slide}>
        <div className={c.carousel}>
          <Carousel
            slidesToShow={1}
            fade={false}
            afterChange={() => setIndex(index === locations.length - 1 ? 0 : index + 1)}
          >
            {img2List.map(url => (
              <img src={url} alt="博悅的圖片" key={url} />
            ))}
          </Carousel>
        </div>
        <div className={c.content}>
          <p className={c.location}>{locations[index]}</p>
        </div>
      </div>
    </div>
  )
}
const Section6 = () => (
  <div className={c.bg}>
    <ViewPort isBottom={false}>
      <Item1 />
    </ViewPort>
    <ViewPort isBottom={false}>
      <Item2 />
    </ViewPort>
  </div>
)

export default Section6
