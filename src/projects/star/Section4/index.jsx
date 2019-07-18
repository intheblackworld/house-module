import { Fragment } from 'react'
import { Element } from 'react-scroll'
import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import c from './index.scss'

const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
  || window.navigator.userAgent.match(/Android/i) != null
const OhYa = ({ show }) => (
  <div className={withTrans('ohya', c, show)}>
    <div className={c.ray} />
    <div className={c.sayGroup}>
      <img src={require('./say1.png')} alt="正義聯盟的圖片" className={c.say1} />
      <img src={require('./say2.png')} alt="正義聯盟的圖片" className={c.say2} />
    </div>
    <div className={c.leftBrothers}>
      <img src={require('./leftBrother.png')} alt="正義聯盟的圖片" />
      {!isMobile && <img src={require('./leftBrother.png')} alt="正義聯盟的圖片" />}
      {!isMobile && <img src={require('./leftBrother.png')} alt="正義聯盟的圖片" />}
    </div>
    <div className={c.rightBrothers}>
      <img src={require('./rightBrother.png')} alt="正義聯盟的圖片" />
      {!isMobile && <img src={require('./rightBrother.png')} alt="正義聯盟的圖片" />}
      {!isMobile && <img src={require('./rightBrother.png')} alt="正義聯盟的圖片" />}
    </div>
  </div>
)

const OhYaTitle = ({ show }) => (
  <img src={require('./ohyaTitle.png')} alt="正義聯盟的圖片" className={withTrans('ohyaTitle', c, show)} />
)

const Title = ({ show }) => (
  <div className={withTrans('title', c, show)}>
    <h2>三大任務全數完成！！</h2>
    <p>你根本巨星！你全家都巨星！</p>
    <h2>完成 3 大任務者及 3/7~5/14 簽約購屋者，現場再加碼</h2>
    <p>Gogoro PLUS & 豪華家電抽抽樂，巨星專屬好禮一次帶回家</p>
  </div>
)

const Present = ({ show }) => (
  <Fragment>
    <img src={require('./present.png')} alt="正義聯盟的圖片" className={withTrans('present', c, show)} />
    <h3 className={withTrans('ps', c, show)}>
      一日林板新活動截止後，加碼抽獎時間另定，詳情將公佈於新板巨星FB粉絲頁
    </h3>
  </Fragment>
)

export const Desc = ({ show }) => (
  <Fragment>
    <img src={require('./notice.png')} alt="正義聯盟的圖片" className={c.notice} />
    <Element id="point7" />
    <div className={withTrans('desc', c, show)}>
      <p>
        1.「本活動」由廣告行銷公司海沃創意行銷主辦，舉辦單位保留審核參加及中獎資格，
        決定修正及變更活動內容之權利。 如有任何疑問，請撥打新板巨星服務專線02-82015333詢問。
      </p>
      <p>
        2. 本活動獎項需親自「新板巨星」活動單位現場領取，恕無法寄送。活動獎品不得折換現金，
        並依規定課徵機會中獎稅或個人綜合所得稅。
        本公司就活動獎項內容得依實際狀況斟酌調整，並保留隨時修改、變更、
        終止或暫停本活動及替換其他等值贈品之權利。
      </p>
      <p>
        3. 活動如有未盡事宜，主辦單位海沃創意行銷擁有保留、修改、暫停及解釋活動內容之權利，
        修改訊息將於活動網站上公佈，不另行通知。
      </p>
    </div>
  </Fragment>
)

const Section4 = () => (
  <Fragment>
    <Element id="point6" />
    <ViewPort>
      <OhYa />
    </ViewPort>
    <div className={c.finish}>
      <div className={c.ray} />
      <ViewPort>
        <OhYaTitle />
      </ViewPort>
      <ViewPort>
        <Title />
      </ViewPort>
      <ViewPort>
        <Present />
      </ViewPort>
      {!isMobile && (
        <ViewPort isBottom={false}>
          <Desc />
        </ViewPort>
      )}
    </div>
  </Fragment>
)

export default Section4
