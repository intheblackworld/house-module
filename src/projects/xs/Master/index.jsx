import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  return (
    <div className={`${bgClass} masterBg`}>
      <div className={c.container}>
        <img src={require('./title1.png')} alt="" className={c.title1} />
        {isMobile ? (
          <img src={require('./title-2-m.png')} alt="" className={c.title2m} />
        ) : (
          <img src={require('./title2.png')} alt="" className={c.title2} />
        )}

        <img src={require('./title3.png')} alt="" className={c.title3} />
        <img src={require('./house.png')} alt="" className={c.house} />
      </div>
    </div>
  )
}

export default Master
