import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  return (
    <div className={containerClass}>
      <img className={bgClass} src={isMobile ? require('./m1.png') : require('./d1.png')} alt="帝璽的圖片" />
      <img src={require('./logo-1.png')} alt="" className={c.logo1} />
      <img src={require('./logo-2.png')} alt="" className={c.logo2} />
      <img src={require('./title-1.png')} alt="" className={c.title1} />
      <img src={require('./title-2.png')} alt="" className={c.title2} />
    </div>
  )
}

export default Master
