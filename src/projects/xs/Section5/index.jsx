/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Container = ({
  show, leftImg, title, subTitle, desc, bg = false, smallImg = true,
}) => {
  const containerClass = withTrans('container', c, show)
  return isMobile ? (
    <div className={`${containerClass} ${bg && c.bg}`}>
      <div className={c.content}>
        <div className={c.text}>
          <h3 className={c.title}>{title}</h3>
          <h3 className={c.subTitle}>{subTitle}</h3>
          <p className={c.desc}>{desc}</p>
        </div>
        {smallImg && <img src={require('./structure.png')} alt="" className={c.structure} />}
      </div>
      <img src={leftImg} alt="" className={c.leftImg} />
    </div>
  ) : (
    <div className={`${containerClass} ${bg && c.bg}`}>
      <img src={leftImg} alt="" className={c.leftImg} />
      <div className={c.content}>
        <div className={c.text}>
          <h3 className={c.title}>{title}</h3>
          <h3 className={c.subTitle}>{subTitle}</h3>
          <p className={c.desc}>{desc}</p>
        </div>
        {smallImg && <img src={require('./structure.png')} alt="" className={c.structure} />}
      </div>
    </div>
  )
}

const Section5 = () => (
  <div>
    <Viewport isBottom={false} position="200px">
      <Container
        bg={false}
        leftImg={require('./topImg.png')}
        title="為愛，對抗大地撼動"
        subTitle="國際隔震建築 耐震達6級"
        desc="安穩，是建築不可或缺的幸福。【新碩鼎和】採用全球享譽盛名，獲多座國際地標指名採用的紐西蘭隔震墊。以20顆LRB隔震墊，有效降低60%以上的地震力，0.32G抗震，可抗至少六級強震，更大幅減少地震侵襲時的搖晃感，提升居住舒適度。"
      />
    </Viewport>
    <Viewport isBottom={false} position="200px">
      <Container
        bg
        smallImg={false}
        leftImg={require('./downImg.png')}
        title="看不見的，更重要"
        subTitle="20支矩形基樁  深入承載層"
        desc="整體結構基礎由20支矩形樁構成，深度達52.5~55.5米，貫入承載層5~8米，與大樓近乎1:1的高度比，緊抓地表，並搭配深度達36米地下室外圍連續壁，作一完全穩固結合。龐大技術成本，只為兌現對安全的承諾，無論世界如何震盪，依然震守你的家！"
      />
    </Viewport>
  </div>
)

export default Section5
