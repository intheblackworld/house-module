import { withTrans, isMobile } from 'utils'
import c from './index.scss'

const Master = ({ show }) => {
  const titleClass = withTrans('title', c, show)
  const leftLeafClass = withTrans('leftLeaf', c, show)
  const rightLeaf1Class = withTrans('rightLeaf1', c, show)
  const rightLeaf2Class = withTrans('rightLeaf2', c, show)

  const downFlower1Class = withTrans('downFlower1', c, show)
  const downFlower2Class = withTrans('downFlower2', c, show)
  const topFlowerClass = withTrans('topFlower', c, show)

  return (
    <div className={c.bg}>
      <div className={c.leaf}>
        <img src={require('./topLeaf.png')} alt="" className={c.topLeaf} />
        <img src={require('./downLeaf.png')} alt="" className={c.downLeaf} />

        <img src={require('./topFlower.png')} alt="" className={topFlowerClass} />
        <img src={require('./downFlower1.png')} alt="" className={downFlower1Class} />
        <img src={require('./downFlower2.png')} alt="" className={downFlower2Class} />
        <img className={leftLeafClass} src={require('./flower-left.png')} alt="" />
        {isMobile ? (
          <img src={require('./title-pc.png')} alt="" className={titleClass} />
        ) : (
          <img src={require('./title-m.png')} alt="" className={titleClass} />
        )}
        <img className={rightLeaf1Class} src={require('./flower-right1.png')} alt="" />
        <img className={rightLeaf2Class} src={require('./flower-right2.png')} alt="" />
      </div>
    </div>
  )
}

export default Master
