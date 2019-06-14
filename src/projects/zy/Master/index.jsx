import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import { isMobile, isPad } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  return isPad ? (
    <img className={bgClass} src={isMobile ? require('./m1.jpg') : require('./d1.jpg')} alt="" />
  ) : (
    <div className={bgClass} />
  )
}

export default Master
