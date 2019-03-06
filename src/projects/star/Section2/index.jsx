import { Fragment } from 'react'
import IconBtn from 'components/Button/IconBtn'
import { Link } from 'react-scroll'
import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import c from './index.scss'

const PCNavigationHeight = 60
const TitleHeader = ({ show }) => (
  <div className={c.titleHeader}>
    <img src={require('./star.png')} alt="" className={c.star} />
    <h2 className={withTrans('head', c, show)}>三大超級任務．斗內超級巨星</h2>
    <img src={require('./star.png')} alt="" className={c.star} />
  </div>
)
const Content = ({ show }) => (
  <div className={c.bg}>
    <div className={withTrans('main', c, show)}>
      <div className={c.item}>
        <div className={c.title}>
          <h2>任務一</h2>
        </div>
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
          to="point3"
          spy
          smooth
          duration={500}
          offset={-PCNavigationHeight}
          key="point3"
        >
          <IconBtn>怎麼拿</IconBtn>
        </Link>
      </div>
      <div className={c.item}>
        <div className={c.title}>
          <h2>任務二</h2>
        </div>
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
          to="point4"
          spy
          smooth
          duration={500}
          offset={-PCNavigationHeight}
          key="point4"
        >
          <IconBtn>怎麼拍</IconBtn>
        </Link>
      </div>
      <div className={c.item}>
        <div className={c.title}>
          <h2>任務三</h2>
        </div>
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
          to="point5"
          spy
          smooth
          duration={500}
          offset={-PCNavigationHeight}
          key="point5"
        >
          <IconBtn>怎麼領</IconBtn>
        </Link>
      </div>
    </div>
  </div>
)
const Section2 = () => (
  <Fragment>
    <ViewPort>
      <TitleHeader />
    </ViewPort>
    <ViewPort isBottom={false}>
      <Content />
    </ViewPort>
  </Fragment>
)

export default Section2
