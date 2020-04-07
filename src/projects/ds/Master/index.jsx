import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  // const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  return (
    <div className={`${containerClass} ${c.section1}`}>
      <div className={c.img1}>
        <img src={require('./bg1.jpg')} alt="" /><img src={require('./bg1.jpg')} alt="" />
      </div>
      <div className={c.img2}>
        <img src={require('./cloud.png')} alt="" /><img src={require('./cloud.png')} alt="" /><img
          src={require('./cloud.png')}
          alt=""
        />
      </div>
      <div className={c.img31}>
        <picture>
          <source srcSet={require('./pc_00.png')} media="(min-width: 750px)" />
          <source srcSet={require('./mo/pc_00.png')} media="(max-width: 750px)" />
          <img src={require('./pc_00.png')} alt="" />
        </picture>
      </div>
      <div className={c.img3}>
        <picture>
          <source srcSet={require('./pc_01.png')} media="(min-width: 750px)" />
          <source srcSet={require('./mo/pc_01.png')} media="(max-width: 750px)" />
          <img src={require('./pc_01.png')} alt="" />
        </picture>
      </div>
      <div className={c.img31}>
        <picture>
          <source srcSet={require('./pc_02.png')} media="(min-width: 750px)" />
          <source srcSet={require('./mo/pc_02.png')} media="(max-width: 750px)" />
          <img src={require('./pc_02.png')} alt="" />
        </picture>
      </div>
      <div className={c.img4}>
        <picture>
          <source srcSet={require('./logo.png')} media="(min-width: 750px)" />
          <source srcSet={require('./mo/logo.png')} media="(max-width: 750px)" />
          <img src={require('./logo.png')} alt="" />
        </picture>
      </div>
      <div className={c.img5}><img src={require('./bg1.png')} alt="" /></div>
    </div>
  )
}

export default Master