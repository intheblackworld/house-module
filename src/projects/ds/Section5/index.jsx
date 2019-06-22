/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { Element } from 'react-scroll'
// import Viewport from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Section5 = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  return (
    <div className={containerClass}>
      <img src={isMobile ? require('./mday.png') : require('./day.png')} className={c.day} alt="" />
      {
        !isMobile && <img src={require('./night.png')} className={c.night} alt="" />
      }
      <div className={c.dialogBox}>
        <div className={c.head}>改寫豪宅紀錄的{ isMobile && <br />}超級規格</div>
        <div className={c.body}>
          <p>■全棟SC鋼骨結構及制震壁，超越法規標準，抗震安全係數強達0.26g，耐震高達6級。</p>
          <p>■採最新環保規劃概念，通過國家黃金級綠建築認證。</p>
          <p>■停車空間規劃重機專用停車位，地下一層設置電動車充電專屬車位。</p>
          <p>■「漸變式車道」設計，符合低底盤超跑豪車的需求。</p>
        </div>
      </div>
    </div>
  )
}

export default Section5
