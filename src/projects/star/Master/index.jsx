import IconBtn from 'components/Button/IconBtn'
import { Link } from 'react-scroll'
import c from './index.scss'

const PCNavigationHeight = 60

const Master = ({ show }) => {
  console.log(show)
  return (
    <div className={c.bg}>
      <div className={c.ray} />
      <div className={c.leftEffect}>
        <img className={c.like} src={require('./like.png')} alt="" />
        <img className={c.laugh} src={require('./laugh.png')} alt="" />
        <img className={c.flower} src={require('./flower.png')} alt="" />
        <img className={c.love} src={require('./love.png')} alt="" />
      </div>
      <div className={c.main}>
        <div className={c.bubbleChat}>
          <div className={c.title}>你當巨星！哥斗內你！</div>
          <Link
            className={c.link}
            to="section2"
            spy
            smooth
            duration={500}
            offset={-PCNavigationHeight}
            key="section2"
          >
            <IconBtn>挑戰任務</IconBtn>
          </Link>
        </div>

        <img className={c.brother} src={require('./brother.png')} alt="" />
      </div>
      <div className={c.rightEffect}>
        <img className={c.flower} src={require('./flower.png')} alt="" />
        <img className={c.surprise} src={require('./surprise.png')} alt="" />
        <img className={c.love} src={require('./love.png')} alt="" />
        <img className={c.smile} src={require('./smile.png')} alt="" />
      </div>
    </div>
  )
}

export default Master
