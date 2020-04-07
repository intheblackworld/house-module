import { useState } from 'react'
import { withTrans } from 'utils'
import MobileNavigation from 'components/MobileNavigation'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)

  const [scroll, setScroll] = useState(0)
  window.addEventListener('scroll', () => {
    if (scroll > 2000) {
      return
    }
    setScroll(window.pageYOffset)
  })

  return (
    <div className={`${bgClass} ${c.section1} ${c.bg} ${c.fullscreen}`}>
      {/* <img src={require('./bgm.png')} alt="" className={c.sky} /> */}
      <div className={c.light}>
        <img src={require('./light.png')} alt="light" />
      </div>
      <div className={c.cloud1}>
        <img src={require('./cloud1.png')} alt="light" />
      </div>
      <div className={c.cloud2}>
        <img src={require('./cloud2.png')} alt="light" />
      </div>
      <div className={c.cloud3}>
        <img src={require('./cloud3.png')} alt="light" />
      </div>
      <div className={c.building}>
        <img src={require('./building.png')} alt="light" />
      </div>
      <div className={c.title}>
        <img src={require('./title.png')} alt="light" />
      </div>
      <div className={c.title_bg}>
        <img src={require('./titlebg.png')} alt="light" />
      </div>
      <div className={c.logo}>
        <img src={require('./logo1.png')} alt="light" />
      </div>
      {isMobile && <MobileNavigation />}
    </div>
  )
}

export default Master