import { Fragment } from 'react'
import c from './index.scss'

const Section4 = ({ show }) => {
  console.log(show)
  return (
    <Fragment>
      <div className={c.ohya}>
        <div className={c.ray} />
        <img src={require('./say1.png')} alt="" className={c.say1} />
        <img src={require('./say2.png')} alt="" className={c.say2} />
        <div className={c.leftBrothers}>
          <img src={require('./leftBrother.png')} alt="" />
          <img src={require('./leftBrother.png')} alt="" />
          <img src={require('./leftBrother.png')} alt="" />
        </div>
        <div className={c.rightBrothers}>
          <img src={require('./rightBrother.png')} alt="" />
          <img src={require('./rightBrother.png')} alt="" />
          <img src={require('./rightBrother.png')} alt="" />
        </div>
      </div>
      <div className={c.finish}>
        <div className={c.ray} />
        <img src={require('./ohyaTitle.png')} alt="" className={c.ohyaTitle} />

        <div className={c.title}>
          <h2>三大任務全數完成！！</h2>
          <p>你根本巨星！你全家都巨星！</p>
          <h2>完成 3 大任務者及 3/7~5/14 已購客戶，現場再加碼</h2>
          <p>Gogoro PLUS & 豪華家電抽抽樂，巨星專屬好禮一次帶回家</p>
        </div>
        <img src={require('./present.png')} alt="" className={c.present} />
        <h3 className={c.ps}>
          一日林板新活動截止後，加碼抽獎時間另定，詳情將公佈於新板巨星FB粉絲頁
        </h3>
        <img src={require('./notice.png')} alt="" className={c.notice} />
        <div className={c.desc}>
          <p>
            1.「新板巨星」之廣告行銷公司海沃創意行銷主辦，舉辦單位保留審核參加及中獎資格，
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
      </div>
    </Fragment>
  )
}

export default Section4
