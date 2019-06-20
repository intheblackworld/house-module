/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { Element } from 'react-scroll'
// import Viewport from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import c from './index.scss'

const Section6 = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  return (
    <div className={containerClass}>
      <img src={require('./triangle.png')} className={c.triangle} alt="" />
      <img src={require('./bone.png')} className={c.bone} alt="" />
      <img src={require('./bg.png')} className={c.bg} alt="" />
      <div className={c.dialogBox}>
        <div className={c.head}>世界制震專家</div>
        <div className={c.body}>
          <p>■3樓至23樓，每層2組共42組，全面守護居家</p>
          <p>■地震發生時可減少樓層位移與變形，增加建築安全性</p>
          <p>■大幅消散地震能量，減輕結構物搖晃程度，並迅速恢復靜止狀態</p>
          <p>■因地震或強風所造成的振動，亦能產生制振效果，提高居住舒適性</p>
          <p>■具全方位振動控制能力的新一代制振系統，已成為台灣與日本豪宅的標準新配備</p>
        </div>
      </div>
    </div>
  )
}

export default Section6
