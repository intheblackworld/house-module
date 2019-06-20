import { Fragment } from 'react'
import IconBtn from 'components/Button/IconBtn'
import { Link } from 'react-scroll'
import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import c from './index.scss'

const PCNavigationHeight = 60

const TitleHeader = ({ show }) => {
  const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
    || window.navigator.userAgent.match(/Android/i) != null
  return (
    <div className={c.titleHeader}>
      <img src={require('./star.png')} alt="帝璽的圖片" className={c.star} />
      <h2 className={withTrans('head', c, show)}>三大超級任務 {!isMobile && '．'}斗內超級巨星</h2>
      <img src={require('./star.png')} alt="帝璽的圖片" className={c.star} />
    </div>
  )
}

const Task1 = ({ show }) => (
  <div className={withTrans('item', c, show)}>
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
        <p>送你iphone XS！</p>
      </div>
      <div className={c.img1}>
        <img src={require('./brother1.png')} alt="帝璽的圖片" />
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
)

const Task2 = ({ show }) => (
  <div className={withTrans('item', c, show)}>
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
        <img src={require('./brother2.png')} alt="帝璽的圖片" />
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
)

const Task3 = ({ show }) => (
  <div className={withTrans('item', c, show)}>
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
        <img src={require('./brother3.png')} alt="帝璽的圖片" />
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
)
const Content = () => (
  <div className={c.bg}>
    <div className={c.main}>
      <div>
        <ViewPort isBottom={false}>
          <Task1 />
        </ViewPort>
      </div>

      <div>
        <ViewPort isBottom={false}>
          <Task2 />
        </ViewPort>
      </div>
      <div>
        <ViewPort isBottom={false}>
          <Task3 />
        </ViewPort>
      </div>
    </div>
  </div>
)
const Section2 = () => (
  <Fragment>
    <ViewPort>
      <TitleHeader />
    </ViewPort>
    <Content />
  </Fragment>
)

export default Section2
