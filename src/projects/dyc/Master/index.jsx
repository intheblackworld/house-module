// import { withTrans } from 'utils'
import c from './index.scss'

const Master = () => (
  <div className={c.bg}>
    <div className={c.leftLeaf} />
    <img src={require('./title.png')} className={c.title} alt="" />
    <div className={c.rightLeaf} />
  </div>
)

export default Master
