// import { withTrans } from 'utils'
import c from './index.scss'

const Section4 = () => (
  <div className={c.bg}>
    <img src={require('./leftTitle.png')} className={c.leftTitle} alt="" />
    <div className={c.content}>
      <h3 className={c.title}>台灣‧日本 一千零一夜的越洋激盪</h3>
      <p className={c.desc}>
        一個堅持一千多個日夜的建築意念，一場橫越2163公里日本海的靈感碰觸。
        台灣建築史上風雲際會的世界級美學工程，德友建設不惜遠赴日本北海道，
        邀請專門承做日本重大公共工程的百年建設株式会社岩田地崎全程參與「德友藏」營造規劃。<br /><br />
        日本有句名言叫「一期一會」，意思近於中文的「把握當下」。
        德友建設攜手岩田地崎首度揮軍北上代表作，不惜費時三年琢磨上百個方案，
        以一期一會的精神，建構一生懸命的經典建築。
      </p>
    </div>
  </div>
)

export default Section4
