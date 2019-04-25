/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const list = [
  {
    src: require('./structure.png'),
  },
  {
    src: require('./topImg.png'),
  },
]

const Container = ({
  show, leftImg, title, subTitle, bg = false, smallImg = true, top, name,
}) => {
  const containerClass = withTrans('container', c, show)
  return isMobile ? (
    <div className={`${containerClass} ${bg && c.bg}`}>
      <div className={c.content}>
        <div className={c.text}>
          <h3 className={c.title}>{title}</h3>
          <h3 className={c.subTitle}>{subTitle}</h3>
          {top ? (
            <p className={c.desc}>
              安穩，是建築不可或缺的幸福。
              <br />
              【新碩鼎和】使用世界知名的紐西蘭隔震墊，
              <br />
              20顆LRB隔震墊＋6支美國ITT阻尼器，
              <br />
              0.32G抗震，耐震達六級以上，
              <br />
              減少60%以上地震力，大幅提升居住安穩度。
              <br />
            </p>
          ) : (
            <p className={c.desc}>
              20支矩形基樁，與大樓高度近乎1:1，
              <br />
              深度達52.5~55.5米，貫入承載層5~8米，
              <br />
              地下室連續壁厚度達90公分、深度達36米，
              <br />
              龐大技術成本，只為兌現對安全的承諾，
              <br />
              無論世界如何震盪，依然震守你的家！
            </p>
          )}
        </div>
      </div>
      {leftImg ? (
        <div>
          <img src={leftImg} alt="" className={c.leftImg} />
          <img src={smallImg} alt="" className={name} />
        </div>
      ) : (
        <div />
      )}
    </div>
  ) : (
    <div className={`${containerClass} ${bg && c.bg}`}>
      <img src={leftImg} alt="" className={c.leftImg} />
      <div className={c.content}>
        <div className={`${c.text} ${top ? '' : c.sb}`}>
          <h3 className={c.title}>{title}</h3>
          <h3 className={c.subTitle}>{subTitle}</h3>
          {top ? (
            <p className={c.desc}>
              安穩，是建築不可或缺的幸福。
              <br />
              【新碩鼎和】採用國際地標指名使用的紐西蘭隔震墊，
              <br />
              20顆LRB隔震墊＋6支美國ITT阻尼器，
              <br />
              0.32G抗震，耐震達六級以上，可減少60%以上地震力，
              <br />
              大幅減少地震侵襲時的搖晃感，提升居住舒適度。
              <br />
            </p>
          ) : (
            <p className={c.desc}>
              20支深度達52.5~55.5米矩形樁，貫入承載層5~8米，
              <br />
              地下室外圍連續壁厚度達90公分、深度達36米，
              <br />
              龐大技術成本，只為兌現對安全的承諾，
              <br />
              無論世界如何震盪，依然震守你的家！
              <br />
            </p>
          )}
        </div>
        <img src={smallImg} alt="" className={name} />
      </div>
    </div>
  )
}

// const Section5 = () => (
//   <div>
//     <Viewport isBottom={false} position="200px">
//       <Container
//         bg={false}
//         name={c.structure}
//         smallImg={require('./structure.png')}
//         leftImg={require('./topImg.png')}
//         title="為愛，對抗大地撼動"
//         subTitle="國際隔震建築 耐震達6級"
//         top
//       />
//     </Viewport>
//     <Viewport isBottom={false} position="200px">
//       <Container
//         bg
//         name={c.promise}
//         smallImg={require('./promise.png')}
//         leftImg={require('./downImg.png')}
//         title="看不見的，更重要"
//         subTitle="20支矩形基樁  深入承載層"
//         top={false}
//       />
//     </Viewport>
//   </div>
// )

const Section5 = () => (
  <div>
    {isMobile ? (
      <div>
        <Viewport isBottom={false} position="200px">
          <Container
            bg={false}
            name={c.structure}
            // smallImg={require('./structure.png')}
            // leftImg={require('./topImg.png')}
            title="為愛，對抗大地撼動"
            subTitle="國際隔震建築 耐震達6級"
            top
          />
        </Viewport>
        <div style={{ width: '90%', margin: '0 auto 30px' }}>
          <Carousel autoplaySpeed={5000} slidesToShow={1} fade={false} dots>
            {list.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <Viewport isBottom={false} position="200px">
          <Container
            bg
            name={c.promise}
            smallImg={require('./promise.png')}
            leftImg={require('./downImg.png')}
            title="看不見的，更重要"
            subTitle="20支矩形基樁  深入承載層"
            top={false}
          />
        </Viewport>
      </div>
    ) : (
      <div>
        <Viewport isBottom={false} position="200px">
          <Container
            bg={false}
            name={c.structure}
            smallImg={require('./structure.png')}
            leftImg={require('./topImg.png')}
            title="為愛，對抗大地撼動"
            subTitle="國際隔震建築 耐震達6級"
            top
          />
        </Viewport>
        <Viewport isBottom={false} position="200px">
          <Container
            bg
            name={c.promise}
            smallImg={require('./promise.png')}
            leftImg={require('./downImg.png')}
            title="看不見的，更重要"
            subTitle="20支矩形基樁  深入承載層"
            top={false}
          />
        </Viewport>
      </div>
    )}
  </div>
)

export default Section5
