import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import SectionTitle from 'components/SectionTitle'
import Viewport from 'components/ViewPort'
import cx from 'classnames'
import hand from 'assets/img/section2/hand.png'
import css from './index.scss'

const items = [
  {
    titleTop: '新北門牌桃園價，',
    titleBottom: '讓你輕鬆住進天龍國！',
    desc:
      '捷運三鶯線預計2023年完工通車，北接板南線、南接桃園八德，將大勢串起桃園與新北一日生活圈！',
    url: require('assets/img/section2/img-1.jpg'),
  },
  {
    titleTop: '夢幻優質大生活，',
    titleBottom: '超完美便捷無懈可擊！',
    desc: '拐個彎就到國道二號、5分鐘接國道三號、10分鐘國道一號、20分鐘桃園國際機場，幸福零時差！',
    url: require('assets/img/section2/img-2.jpg'),
  },
  {
    titleTop: '未來增值第一站，',
    titleBottom: '瞄準錢能先收入囊袋！ ',
    desc: '捷運鶯桃福德站完工在即，鳳鳴唯一350米步行就到，交通更便利、地段最吸金！',
    url: require('assets/img/section2/img-3.jpg'),
  },
  {
    titleTop: '文青必來新地標，',
    titleBottom: '藝術美感全都上身!',
    desc:
      '新北市立美術館預計2022年開館營運、三鶯桃花源IG打卡熱點、休閒韻味陶瓷老街，隨時隨地當文青！',
    url: require('assets/img/section2/img-4.jpg'),
  },
]

const Item = ({ show, item, index }) => {
  const even = index % 2 === 0
  const odd = !even
  const itemClass = cx(css.main, {
    [css.right]: odd,
    [css.left]: even,
    [css.show]: show,
  })
  return (
    <div className={itemClass}>
      {odd && <Image src={item.url} alt="" key={item.url} />}
      <div className={css.descBg}>
        <h3>
          {item.titleTop}
          <br />
          {item.titleBottom}
        </h3>
        <p>{item.desc}</p>
      </div>
      {even && <Image src={item.url} alt="" key={item.url} />}
    </div>
  )
}

const Section2 = () => (
  <React.Fragment>
    <Container>
      <div className={css.title}>4招買房必勝關鍵</div>
      <Viewport>
        <SectionTitle titleTop="租不如買" titleBottom="NEW FUTURE" iconUrl={hand} />
      </Viewport>
      {items.map((item, index) => (
        <Viewport key={item.url}>
          <Item item={item} index={index + 1} />
        </Viewport>
      ))}
    </Container>
  </React.Fragment>
)

export default Section2
