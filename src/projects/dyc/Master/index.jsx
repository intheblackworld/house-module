import { withTrans } from 'utils'
import c from './index.scss'

const Master = ({ show }) => {
  const titleClass = withTrans('title', c, show)
  const leftLeafClass = withTrans('leftLeaf', c, show)
  const rightLeaf1Class = withTrans('rightLeaf1', c, show)
  const rightLeaf2Class = withTrans('rightLeaf2', c, show)
  return (
    <div className={c.bg}>
      <div className={c.leaf}>
        <img className={leftLeafClass} src={require('./flower-left.png')} alt="" />
        <div className={titleClass}>
          <div className={c.main}>
            <h3>台湾に、日本の美しい立ち姿を</h3>
          </div>
          <div>
            <div className={c.color}>
              <h3>一座不穿制服的建築</h3>
            </div>
            <div className={c.sub}>值得花三、五年排隊的日本精工新典範</div>
          </div>
        </div>
        <img className={rightLeaf1Class} src={require('./flower-right1.png')} alt="" />
        <img className={rightLeaf2Class} src={require('./flower-right2.png')} alt="" />
      </div>
    </div>
  )
}

export default Master
