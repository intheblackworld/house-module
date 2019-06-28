import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  return <div className={`${bgClass} masterBg`} />
}

export default Master