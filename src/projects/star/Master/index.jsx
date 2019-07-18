import IconBtn from 'components/Button/IconBtn'
import { Link } from 'react-scroll'
import { withTrans } from 'utils'
import c from './index.scss'

const PCNavigationHeight = 60

const Master = ({ show }) => {
  const brotherClass = withTrans('brother', c, show)
  const bubbleClass = withTrans('bubbleChat', c, show)
  const leftEffectClass = withTrans('leftEffect', c, show)
  const rightEffectClass = withTrans('rightEffect', c, show)

  const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
    || window.navigator.userAgent.match(/Android/i) != null
  return (
    <div className={c.bg}>
      <div className={c.ray} />
      <div className={leftEffectClass}>
        <img className={c.like} src={require('./like.png')} alt="正義聯盟的圖片" />
        <img className={c.love} src={require('./love.png')} alt="正義聯盟的圖片" />
        <img className={c.like} src={require('./like.png')} alt="正義聯盟的圖片" />
        <img className={c.flower} src={require('./flower.png')} alt="正義聯盟的圖片" />
        <img className={c.laugh} src={require('./laugh.png')} alt="正義聯盟的圖片" />
        <img className={c.love} src={require('./love.png')} alt="正義聯盟的圖片" />
        <img className={c.like} src={require('./like.png')} alt="正義聯盟的圖片" />
      </div>
      <div className={c.main}>
        <div className={bubbleClass}>
          <h2 className={c.title}>你當巨星！哥斗內你！</h2>
          {!isMobile && (
            <Link
              className={c.link}
              to="point2"
              spy
              smooth
              duration={500}
              offset={-PCNavigationHeight}
              key="section2"
            >
              <IconBtn>挑戰任務</IconBtn>
            </Link>
          )}
        </div>

        <img className={brotherClass} src={require('./brother.png')} alt="正義聯盟的圖片" />
        {isMobile && (
          <Link
            className={c.link}
            to="point2"
            spy
            smooth
            duration={500}
            offset={-PCNavigationHeight}
            key="section2"
          >
            <IconBtn>挑戰任務</IconBtn>
          </Link>
        )}
      </div>
      <div className={rightEffectClass}>
        <img className={c.flower} src={require('./flower.png')} alt="正義聯盟的圖片" />
        <img className={c.surprise} src={require('./surprise.png')} alt="正義聯盟的圖片" />
        <img className={c.love} src={require('./love.png')} alt="正義聯盟的圖片" />
        <img className={c.flower} src={require('./flower.png')} alt="正義聯盟的圖片" />
        <img className={c.smile} src={require('./smile.png')} alt="正義聯盟的圖片" />
        <img className={c.smile} src={require('./smile.png')} alt="正義聯盟的圖片" />
        <img className={c.love} src={require('./love.png')} alt="正義聯盟的圖片" />
      </div>
    </div>
  )
}

export default Master
