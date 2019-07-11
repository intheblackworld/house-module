import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import MobileNavigation from 'components/MobileNavigation'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  return (
    <div className={`${bgClass}`}>
      {isMobile ? (
        <div className={c.container}>
          <img src={require('./bgm.jpg')} alt="" className={c.bgImg} />
          <img src={require('./title1m.png')} alt="" className={c.title1} />
          <img src={require('./title2m.png')} alt="" className={c.title2} />

          <img src={require('./title3m.png')} alt="" className={c.title3} />
          <img src={require('./title4m.png')} alt="" className={c.title4} />
        </div>
      ) : (
        <div className={c.container}>
          <img src={require('./bg.jpg')} alt="" className={c.bgImg} />
          <img src={require('./title1.png')} alt="" className={c.title1} />
          <img src={require('./title2.png')} alt="" className={c.title2} />

          <img src={require('./title3.png')} alt="" className={c.title3} />
          <img src={require('./title4.png')} alt="" className={c.title4} />
        </div>
      )}

      {isMobile && <MobileNavigation />}
    </div>
  )
}

export default Master
