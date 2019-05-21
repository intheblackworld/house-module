import { useState } from 'react'
import { withTrans } from 'utils'
import MobileNavigation from 'components/MobileNavigation'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)

  const [scroll, setScroll] = useState(0)
  window.addEventListener('scroll', () => {
    setScroll(window.pageYOffset)
    console.log('in listener', scroll)
  })

  return (
    <div className={`${bgClass}`}>
      {isMobile ? (
        <img src={require('./bgm.png')} alt="" className={c.sky} />
      ) : (
        <img src={require('./bg.png')} alt="" className={c.sky} />
      )}
      {isMobile ? (
        <img src={require('./buildingm.png')} alt="" className={c.building} />
      ) : (
        <img src={require('./building.png')} alt="" className={c.building} />
      )}
      {isMobile ? (
        <img src={require('./titlem.png')} alt="" className={c.title} />
      ) : (
        <img src={require('./title.png')} alt="" className={c.title} />
      )}
      <img
        src={require('./train.png')}
        alt=""
        className={c.train}
        style={{ left: `${-2 * scroll + 500}px` }}
      />
      {isMobile && <MobileNavigation />}
    </div>
  )
}

export default Master
