import { Fragment, useState } from 'react'
import { Element } from 'react-scroll'
import IconBtn from 'components/Button/IconBtn'
import Order from 'components/Order'
import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import Carousel from 'components/Carousel'
import c from './index.scss'

const Title = ({
  show, number, h2, p,
}) => (
  <div className={c.titleBg}>
    <h2 className={withTrans('number', c, show)}>{number}</h2>
    <div className={withTrans('desc', c, show)}>
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  </div>
)

const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
  || window.navigator.userAgent.match(/Android/i) != null
const Task1 = ({ show }) => (
  <div className={withTrans('task1', c, show)}>
    <ViewPort position="-400px">
      <Title number="1" h2="任務一、追片看明星" p="按讚＋留言＋分享" />
    </ViewPort>
    <img src={require('./brother1.png')} alt="博悅的圖片" className={c.brother1} />
    <img src={require('./brother11.png')} alt="博悅的圖片" className={c.brother11} />
    <div className={c.taskHint1}>
      <h3>抽獎時間</h3>
      <p>第 1 次：108/03/23(六)下午 14:00 抽出 iPhoneXR 1台 (市價 26,900)</p>
      <p>第 2 次：108/04/20(六)下午 14:00 抽出 iPhoneXS 1台 (市價 35,900)</p>
    </div>
    <div className={c.taskLabel}>抽iPhone</div>
    <div className={c.steps}>
      <div className={c.item}>
        <div className={c.label}>Step 1</div>
        <div className={c.icon1}>
          <img src={require('./step1.png')} alt="博悅的圖片" />
        </div>
        <div className={c.desc}>到新板巨星 FB 按讚追蹤</div>
      </div>
      {!isMobile && <img src={require('./arrowRight.png')} alt="博悅的圖片" className={c.arrowRight} />}
      <div className={c.item}>
        <div className={c.label}>Step 2</div>
        <div className={c.icon2}>
          <img src={require('./step2.png')} alt="博悅的圖片" />
        </div>
        <div className={c.desc}>
          看活動影片，於貼文按讚+留言 「我在林板新，最愛新板巨星」 +TAG 標記 3 位朋友
        </div>
      </div>
      {!isMobile && <img src={require('./arrowRight.png')} alt="博悅的圖片" className={c.arrowRight} />}
      <div className={c.item}>
        <div className={c.label}>Step 3</div>
        <div className={c.icon3}>
          <img src={require('./step3.png')} alt="博悅的圖片" />
        </div>
        <div className={c.desc}>公開分享活動影片 到個人 FB 頁面</div>
      </div>
    </div>
  </div>
)

const FbBlock = ({ show }) => (
  <div className={withTrans('fbBlock', c, show)}>
    <div style={{ margin: '0 auto', width: isMobile ? '204px' : '400px' }}>
      <IconBtn
        width={isMobile ? '204px' : '400px'}
        fontSize={isMobile ? '12px' : '20px'}
        link="https://www.facebook.com/lbs.h35.tw/posts/2250466511683638"
      >
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
      <Element id="point4" style={{ marginTop: '100px' }} />
    </div>
  </div>
)

const MovieBlock = ({ show }) => (
  <div className={withTrans('movieBlock', c, show)}>
    <div className={c.movieTitle}>
      <h2>林板新特區X木曜4超玩</h2>
    </div>
    <div className={c.movie}>
      <div className={c.video}>
        <iframe
          title="liveStream"
          width={isMobile ? '407' : '262'}
          height={isMobile ? '274' : '172'}
          src="https://www.youtube.com/embed/mTUz5unNUDQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={c.desc}>
        站前商圈、秀泰影城、水岸河濱、萬坪造鎮、飯店級休閒設施、３房靈活大空間‥林板新特區好吃好住又好玩！精采生活連「木曜４超玩」都親自來體驗。
        <br />
        <br />
        快來看一個屋簷下，在比巨星還閃亮的林板新特區裡，會激盪出什麼火花！
      </div>
    </div>
  </div>
)

const Task2 = ({ show }) => {
  const steps = ['Step 1', 'Step 2', '打卡成功！！']
  const descs = [
    '在林板新特區「新板巨星」接待中心前，拍下小木屋美照。（如以上範例）',
    '在林板新特區大豐公園內，朝樹海及大棟距建物拍下美照。（如以上範例）',
    '',
  ]
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <div className={withTrans('task2', c, show)}>
      <ViewPort position="-400px">
        <Title number="2" h2="任務二、鐵粉來踩點" p="到兩大星據點拍照打卡" />
      </ViewPort>
      <img src={require('./brother2.png')} alt="博悅的圖片" className={c.brother2} />
      <div className={c.taskHint2}>
        <p>不用抽即可領取百元 7-11 禮券</p>
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
        {!isMobile && <img src={require('./arrowDown.png')} alt="博悅的圖片" className={c.arrowDown} />}
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
      <div className={c.carousel}>
        <h2 className={c.carouselTitle}>指定照片 {slideIndex + 1}</h2>
        <div className={c.carouselBubble}>
          <h2>{steps[slideIndex]}</h2>
        </div>
        {slideIndex === 2 ? <img src={require('./frame.png')} alt="博悅的圖片" className={c.frame} /> : ''}
        <Carousel
          slidesToShow={1}
          fade={false}
          arrows
          className={c.caruselImg}
          autoplaySpeed={slideIndex === 2 ? 5000 : 3000}
          afterChange={index => setSlideIndex(index)}
        >
          <img src={require('./slide1.png')} alt="博悅的圖片" />
          <img src={require('./slide2.png')} alt="博悅的圖片" />
          <img src={require('./slide3.png')} alt="博悅的圖片" />
        </Carousel>
        <div className={c.carouselDesc}>{descs[slideIndex]}</div>
      </div>
    </div>
  )
}

const GoogleBtn = ({ show }) => (
  <div
    style={{ margin: '0 auto', width: isMobile ? '204px' : '400px' }}
    className={withTrans('googleBtn', c, show)}
  >
    <IconBtn
      width={isMobile ? '204px' : '400px'}
      fontSize={isMobile ? '12px' : '20px'}
      link="https://goo.gl/maps/UUvHaMXa1at"
    >
      開啟 Google Map 導航
    </IconBtn>
  </div>
)

const MapTitle = ({ show }) => (
  <div className={withTrans('mapTitle', c, show)}>
    <h2>
      林新板特區- <br />
      拍照打卡地點
    </h2>
  </div>
)

const Task3 = ({ show }) => (
  <div className={withTrans('task3', c, show)}>
    <ViewPort position="-400px">
      <Title number="3" h2="任務三、新星領航員" p="介紹賞屋簽約送" />
    </ViewPort>
    <img src={require('./brother3.png')} alt="博悅的圖片" className={c.brother3} />
    <img src={require('./brother31.png')} alt="博悅的圖片" className={c.brother31} />
    <div className={c.taskHint3}>
      <p>介紹親友到新板巨星賞屋：</p>
      <h3>・簽約成交 30坪(含)以下送 38,888 大紅包</h3>
      <h3>・簽約成交 30坪以上送 58,888 大紅包</h3>
    </div>
    <div className={c.ps}>請留下您的聯絡資訊，將有服務專員與您聯絡</div>
    <Order noTitle />
  </div>
)
const Map = ({ show }) => <div className={withTrans('map', c, show)} />

const LeftEffect = ({ show }) => (
  <div className={withTrans('leftEffect', c, show)}>
    <img className={c.like} src={require('./like.png')} alt="博悅的圖片" />
    <img className={c.love} src={require('./love.png')} alt="博悅的圖片" />
    <img className={c.love} src={require('./love.png')} alt="博悅的圖片" />
    <img className={c.laugh} src={require('./laugh.png')} alt="博悅的圖片" />
    <img className={c.love} src={require('./love.png')} alt="博悅的圖片" />
  </div>
)

const RightEffect = ({ show }) => (
  <div className={withTrans('rightEffect', c, show)}>
    <img className={c.like} src={require('./like.png')} alt="博悅的圖片" />
    <img className={c.love} src={require('./love.png')} alt="博悅的圖片" />
    <img className={c.love} src={require('./love.png')} alt="博悅的圖片" />
    <img className={c.laugh} src={require('./laugh.png')} alt="博悅的圖片" />
    <img className={c.love} src={require('./love.png')} alt="博悅的圖片" />
  </div>
)
const Section3 = () => (
  <Fragment>
    <div className={c.bg}>
      <ViewPort isBottom={false}>
        <LeftEffect />
      </ViewPort>
      <ViewPort isBottom={false}>
        <RightEffect />
      </ViewPort>
      <div className={c.main}>
        {/* 任務一 */}
        <ViewPort isBottom={false} position="-200px">
          <Task1 />
        </ViewPort>
        <ViewPort isBottom={false}>
          <FbBlock />
        </ViewPort>
        {/* 一個屋簷下(影片區塊暫時隱藏) */}
        <ViewPort isBottom={false} position="-200px">
          <MovieBlock />
        </ViewPort>
        {/* 任務二 */}
        <ViewPort isBottom={false} position="-200px">
          <Task2 />
        </ViewPort>
        <ViewPort isBottom={false}>
          <GoogleBtn />
        </ViewPort>
        <ViewPort>
          <MapTitle />
        </ViewPort>
        <ViewPort isBottom={false}>
          <Map />
        </ViewPort>
        <Element id="point5" style={{ marginTop: '30px' }} />
        {/* 任務三 */}
        <ViewPort isBottom={false} position="-300px">
          <Task3 />
        </ViewPort>
      </div>
    </div>
  </Fragment>
)

export default Section3
