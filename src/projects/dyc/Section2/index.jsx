// import { withTrans } from 'utils'
import c from './index.scss'

const Section2 = () => (
  <div className={c.bg}>
    <div className={c.container}>
      <h3 className={c.title}>驕傲的站在郭台銘面前</h3>
      <div className={c.desc}>
        <p>鴻海頂埔園區正對面，感動科技人的精工收藏</p><br />
        <p>逾兆元產值10公頃高科技自然劇場，一個用心完美的建築家，與園區</p>
        <p>最講究的生活家，相約在中央大道第一排風景包廂；放眼天地穹蒼，</p>
        <p>靜取萬方艷羨，歡迎有遠見的您就座，與鴻海面對面。</p>
        <p>人生、呼吸、視野開始世界級！</p>
      </div>
      <img className={c.flower} src={require('./flower.png')} alt="" />
    </div>
  </div>
)

export default Section2
