import { withTrans, withGlobal } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withGlobal('bg', withTrans('bg', c, show))

  return (
    <div className={bgClass}>
      <img src={require('./title.png')} alt="" className={c.title} />
      <div className={c.subTitle}>公園富人區 地標落成 ˙ 70-83坪</div>
    </div>
  )
}

export default Master