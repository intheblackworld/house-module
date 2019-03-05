import { Fragment } from 'react'
import IconBtn from 'components/Button/IconBtn'
import { Link } from 'react-scroll'
import c from './index.scss'

const PCNavigationHeight = 60

const Section2 = ({ show }) => {
  console.log(show)
  return (
    <Fragment>
      <div className={c.titleHeader}>
        <img src={require('./star.png')} alt="" className={c.star} />
        <h2 className={c.head}>三大超級任務．斗內超級巨星</h2>
        <img src={require('./star.png')} alt="" className={c.star} />
      </div>
      <div className={c.bg}>
        <div className={c.main}>
          <div className={c.item}>
            <div className={c.title}><h2>任務一</h2></div>
            <div className={c.content}>
              <div className={c.contentTitle}>
                <h3>追片看明星</h3>
                <p>影片按讚+留言+分享</p>
              </div>
              <div className={c.desc}>
                <h3>快來看哥！</h3>
                <p>送你iphone X！</p>
              </div>
              <div className={c.img1}>
                <img src={require('./brother1.png')} alt="" />
              </div>
            </div>
            <Link
              className={c.link}
              to="task1"
              spy
              smooth
              duration={500}
              offset={-PCNavigationHeight}
              key="task1"
            >
              <IconBtn>怎麼拿</IconBtn>
            </Link>
          </div>
          <div className={c.item}>
            <div className={c.title}><h2>任務二</h2></div>
            <div className={c.content}>
              <div className={c.contentTitle}>
                <h3>鐵粉來踩點</h3>
                <p>２大星據點拍照打卡</p>
              </div>
              <div className={c.desc}>
                <h3>
                  來拿711禮卷！
                  <br />
                  啾咪！
                </h3>
              </div>
              <div className={c.img2}>
                <img src={require('./brother2.png')} alt="" />
              </div>
            </div>
            <Link
              className={c.link}
              to="task2"
              spy
              smooth
              duration={500}
              offset={-PCNavigationHeight}
              key="task2"
            >
              <IconBtn>怎麼拍</IconBtn>
            </Link>
          </div>
          <div className={c.item}>
            <div className={c.title}><h2>任務三</h2></div>
            <div className={c.content}>
              <div className={c.contentTitle}>
                <h3>新星領航員</h3>
                <p>介紹賞屋簽約送</p>
              </div>
              <div className={c.desc}>
                <h3>哥撒錢啦！</h3>
                <p>萬元紅包意思一下！</p>
              </div>
              <div className={c.img3}>
                <img src={require('./brother3.png')} alt="" />
              </div>
            </div>
            <Link
              className={c.link}
              to="task3"
              spy
              smooth
              duration={500}
              offset={-PCNavigationHeight}
              key="task3"
            >
              <IconBtn>怎麼領</IconBtn>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Section2
