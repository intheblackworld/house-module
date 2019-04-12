import { withTrans, isMobile } from 'utils'
import c from './index.scss'

const Master = ({ show }) => {
  const titleClass = withTrans('title', c, show)
  const leftLeafClass = withTrans('leftLeaf', c, show)
  const rightLeaf1Class = withTrans('rightLeaf1', c, show)
  const rightLeaf2Class = withTrans('rightLeaf2', c, show)

  const leftMLeaf1Class = withTrans('leftMLeaf1', c, show)
  const leftMLeaf2Class = withTrans('leftMLeaf2', c, show)
  const rightMLeafClass = withTrans('rightMLeaf', c, show)
  return (
    <div className={c.bg}>
      <div className={c.leaf}>
        <img className={leftLeafClass} src={require('./flower-left.png')} alt="" />
        <img className={leftMLeaf1Class} src={require('./flower-left-m-1.png')} alt="" />
        <img className={leftMLeaf2Class} src={require('./flower-left-m-2.png')} alt="" />
        {isMobile ? (
          <img src={require('./title-pc.png')} alt="" className={titleClass} />
        ) : (
          <img src={require('./title-m.png')} alt="" className={titleClass} />
        )}
        <img className={rightLeaf1Class} src={require('./flower-right1.png')} alt="" />
        <img className={rightLeaf2Class} src={require('./flower-right2.png')} alt="" />
        <img className={rightMLeafClass} src={require('./flower-right-m-1.png')} alt="" />
      </div>
    </div>
  )
}

export default Master
