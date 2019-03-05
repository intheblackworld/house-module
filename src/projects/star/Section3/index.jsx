import { Fragment } from 'react'
import IconBtn from 'components/Button/IconBtn'
import Order from 'components/Order'
import c from './index.scss'

const Title = ({
  show, number, h2, p,
}) => {
  console.log(show)
  return (
    <div className={c.titleBg}>
      <h2 className={c.number}>{number}</h2>
      <div className={c.desc}>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  )
}
const Section3 = ({ show }) => {
  console.log(c)
  console.log(show)
  return (
    <Fragment>
      <div className={c.bg}>
        <div className={c.leftEffect} />
        <div className={c.main}>
          {/* 任務一 */}
          <div className={c.task1}>
            <Title number="1" h2="任務一、追片看明星" p="按讚＋留言＋分享" />
            <img src={require('./brother1.png')} alt="" className={c.brother1} />
            <img src={require('./brother11.png')} alt="" className={c.brother11} />
            <div className={c.taskHint1}>
              <h3>抽獎時間</h3>
              <p>第 1 次：108/03/23(六)下午 14:00 抽出 iPhoneXR 1台 (市價 26,900)</p>
              <p>第 2 次：108/04/20(六)下午 14:00 抽出 iPhoneXS 1台 (市價 35,900)</p>
            </div>
            <div className={c.taskLabel}>如何抽iPhone</div>
            <div className={c.steps}>
              <div className={c.item}>
                <div className={c.label}>Step 1</div>
                <div className={c.icon1}>
                  <img src={require('./step1.png')} alt="" />
                </div>
                <div className={c.desc}>到新板巨星 FB 按讚追蹤</div>
              </div>
              <img src={require('./arrowRight.png')} alt="" className={c.arrowRight} />
              <div className={c.item}>
                <div className={c.label}>Step 2</div>
                <div className={c.icon2}>
                  <img src={require('./step2.png')} alt="" />
                </div>
                <div className={c.desc}>
                  看活動影片，於貼文按讚+留言 「我在林板新，最愛新板巨星」 +TAG 標記 3 位朋友
                </div>
              </div>
              <img src={require('./arrowRight.png')} alt="" className={c.arrowRight} />
              <div className={c.item}>
                <div className={c.label}>Step 3</div>
                <div className={c.icon3}>
                  <img src={require('./step3.png')} alt="" />
                </div>
                <div className={c.desc}>公開分享活動影片 到個人 FB 頁面</div>
              </div>
            </div>
          </div>
          <div style={{ margin: '0 auto', width: '400px' }}>
            <IconBtn width="400px" link="https://www.facebook.com/lbs.h35.tw">
              按讚＋留言＋分享活動影片
            </IconBtn>
          </div>
          <div className={c.fbDesc}>
            將於指定日期 於FB抽獎軟體 抽出兩項獎項
            <br />
            第 1 次未中獎者即有第 2 次抽獎機會，越早留言中獎機會越大，得獎者將公佈於「新板巨星」FB
            粉絲專頁，
            <br />
            請得獎者於 1 週內以 FB 私訊真實姓名、電話供獎項領取聯繫
          </div>
          {/* 一個屋簷下(影片區塊暫時隱藏) */}
          {/* 任務二 */}
          <div className={c.task2}>
            <Title number="2" h2="任務二、鐵粉來踩點" p="到兩大星據點拍照打卡" />
            <img src={require('./brother2.png')} alt="" className={c.brother2} />
            <div className={c.taskHint2}>
              <p>不用抽即可領取百元 7-11 禮券</p>
              <p>（限量三百名）</p>
            </div>
            <div className={c.steps}>
              <div className={c.item}>
                <div className={c.label}>Step 1</div>
                <div className={c.desc}>
                  至林板新特區拍下２張指定照片上傳至個人 FB
                  <br />
                  並同步在「新板巨星」打卡公開分享
                  <br />－ 範例如圖 －
                </div>
              </div>
              <img src={require('./arrowDown.png')} alt="" className={c.arrowDown} />
              <div className={c.item}>
                <div className={c.label}>Step 2</div>
                <div className={c.desc}>
                  進入「新板巨星」接待中心，向櫃檯人員表示
                  <br />
                  參加「一日林板新活動」出示達成任務之 FB 頁面
                  <br />
                  並完成登記，即可現場領取 7-11 百元禮卷
                  <br />－ 限量300名 －
                </div>
              </div>
            </div>
            {/* 拍照打卡範例輪播 */}
            <div className={c.carousel}>123</div>
          </div>
          <div style={{ margin: '0 auto', width: '400px' }}>
            <IconBtn width="400px" link="https://goo.gl/maps/UUvHaMXa1at">
              開啟 Google Map 導航
            </IconBtn>
          </div>
          <div className={c.mapTitle}>
            <h2>
              林新板特區- <br />
              拍照打卡地點
            </h2>
          </div>
          <div className={c.map} />
          {/* 任務三 */}
          <div className={c.task3}>
            <Title number="3" h2="任務三、新星領航員" p="介紹賞屋簽約送" />
            <img src={require('./brother3.png')} alt="" className={c.brother3} />
            <img src={require('./brother31.png')} alt="" className={c.brother31} />
            <div className={c.taskHint3}>
              <p>介紹親友到新板巨星賞屋：</p>
              <h3>・簽約成交 30坪(含)以下送 38,888 大紅包</h3>
              <h3>・簽約成交 30坪以上送 58,888 大紅包</h3>
            </div>
            <div className={c.ps}>請留下您的聯絡資訊，將有服務專員與您聯絡</div>
            <Order noTitle />
          </div>
        </div>
        <div className={c.rightEffect} />
      </div>
    </Fragment>
  )
}

export default Section3
