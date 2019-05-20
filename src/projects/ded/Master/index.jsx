import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  const colorBgClass = withTrans('colorBg', c, show)

  return (
    <div className={`${bgClass} masterBg`}>
      <div className={`${colorBgClass} masterBg`} />
      <div className={c.container}>
        <img src={require('./title.png')} alt="長虹天際的圖片" className={c.title} />
        <p className={`${c.subTitle} flex-c`}>公園富人區 地標落成{!isMobile && '˙'} 70-83坪</p>
      </div>
    </div>
  )
}

export default Master
