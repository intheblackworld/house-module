// import { withTrans } from 'utils'
import c from './index.scss'

const Section5 = () => (
  <div className={c.bg}>
    <img src={require('./leftFlower.png')} alt="" className={c.leftFlower} />
    <img src={require('./rightFlower.png')} alt="" className={c.rightFlower} />
    <div className={c.container}>
      <h3 className={c.title}>
        中央大道にひとつだけ<br />
        從日本到中央大道，美的世界級
      </h3>
      <div className={c.content}>
        <div className={c.sideBar}>
          <li className={c.item}>
            <img src={require('./fan.png')} alt="" />
            <div className={c.label}>
              <h3>藏地利</h3>
            </div>
          </li>
          <li className={c.item}>
            <img src={require('./fan.png')} alt="" />
            <div className={c.label}>
              <h3>藏動能</h3>
            </div>
          </li>
          <li className={c.item}>
            <img src={require('./fan.png')} alt="" />
            <div className={c.label}>
              <h3>藏繁華</h3>
            </div>
          </li>
          <li className={c.item}>
            <img src={require('./fan.png')} alt="" />
            <div className={c.label}>
              <h3>藏智慧</h3>
            </div>
          </li>
          <li className={c.item}>
            <img src={require('./fan.png')} alt="" />
            <div className={c.label}>
              <h3>藏慢味</h3>
            </div>
          </li>
        </div>
        <div className={c.slider}>
          <div className={c.blockWhite}>
            <h3 className={c.blockTitle}>億兆產值移居就業潮</h3>
            <p className={c.blockDesc}>
              正對鴻海、正崴、鼎創達…等800多家企業集團齊聚的頂埔高科技園區，
              億兆產值啟動土城經濟大時代，超過6000名科技人移居就業潮，
              購屋需求一觸即發，掌握增值前景，
              更要卡位中央大道第一排最強地利、最優生活。
            </p>
          </div>
          <img className={c.blockImg} src={require('./slide1.png')} alt="" />
          <div className={c.blockYellow} />
        </div>
      </div>
    </div>
  </div>
)

export default Section5
