/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { Element } from 'react-scroll'
// import Viewport from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import c from './index.scss'

const Section2 = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  return (
    <div className={containerClass}>
      <img src={require('./d2.png')} alt="" />
      <div className={c.content}>
        <h3>頂尖企業、跨國集團首選的經貿大道</h3>
        <p>國泰、富邦、新光、全球人壽、DHL…百大產業龍頭總部及國際跨國分公司在台分部，</p>
        <p>眼光一致將營運據點鎖定在建國大道上佈局。</p>
      </div>
    </div>
  )
}

export default Section2
