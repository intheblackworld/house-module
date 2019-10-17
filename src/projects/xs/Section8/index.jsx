/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const list1 = [
  {
    src: require('./2房1.jpg'),
  },
  {
    src: require('./2房2.jpg'),
  },
  {
    src: require('./2房3.jpg'),
  },
]

const list2 = [
  {
    src: require('./3房1.jpg'),
  },
  {
    src: require('./3房2.jpg'),
  },
  {
    src: require('./3房3.jpg'),
  },
  {
    src: require('./3房4.jpg'),
  },
]

const Container = ({
  show, title, subTitle, top,
}) => {
  const containerClass = withTrans('container', c, show)
  return isMobile ? (
    <div className={`${containerClass}`}>
      <div className={c.content}>
        <div className={c.text}>
          <h3 className={c.title}>{title}</h3>
          <h3 className={c.subTitle}>{subTitle}</h3>
          {top ? (
            <p className={c.desc}>
              方正面寬型規劃，客廳享3米大尺度
              <br />
              每房皆開窗，無虛坪浪費，空間運用恰到好處
            </p>
          ) : (
            <p className={c.desc}>
              3房+2間，別家沒有，我們有！
              <br />
              走道規劃儲藏、置物空間，坪效再進化
              <br />
              雜物再多通通有地方收，越住越寬敞
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className={`${containerClass} ${top ? c.top : ''}`}>
      {
        top ? (
          <Carousel autoplaySpeed={5000} slidesToShow={1} fade={false} dots>
            {list1.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel autoplaySpeed={5000} slidesToShow={1} fade={false} dots>
            {list2.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </Carousel>
        )
      }
      <div className={c.content}>
        <div className={`${c.text} ${top ? '' : c.sb}`}>
          <h3 className={c.title}>{title}</h3>
          <h3 className={c.subTitle}>{subTitle}</h3>
          {top ? (
            <p className={c.desc}>
              方正面寬型規劃，客廳享3米大尺度
              <br />
              每房皆開窗，無虛坪浪費，空間運用恰到好處
            </p>
          ) : (
            <p className={c.desc}>
              3房+2間，別家沒有，我們有！
              <br />
              走道規劃儲藏、置物空間，坪效再進化
              <br />
              雜物再多通通有地方收，越住越寬敞
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const Section8 = () => (
  <div>
    {isMobile ? (
      <div>
        <Viewport isBottom={false} position="200px">
          <Container
            title="28坪 2+1房"
            subTitle="採光高坪效 大小最剛好"
            top
          />
        </Viewport>
        <div style={{ width: '90%', margin: '0 auto 30px' }}>
          <Carousel autoplaySpeed={5000} slidesToShow={1} fade={false} dots>
            {list1.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <Viewport isBottom={false} position="200px">
          <Container
            title="43、46坪 3房+2間"
            subTitle="多2間超萬用 雜物沒了 空間更大"
            top={false}
          />
        </Viewport>
        <div style={{ width: '90%', margin: '0 auto 30px' }}>
          <Carousel autoplaySpeed={5000} slidesToShow={1} fade={false} dots>
            {list2.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    ) : (
      <div>
        <Viewport isBottom={false} position="200px">
          <Container
            title="28坪 2+1房"
            subTitle="採光高坪效 大小最剛好"
            top
          />
        </Viewport>
        <Viewport isBottom={false} position="200px">
          <Container
            title="43、46坪 3房+2間"
            subTitle="多2間超萬用 雜物沒了 空間更大"
            top={false}
          />
        </Viewport>
      </div>
    )}
  </div>
)

export default Section8
