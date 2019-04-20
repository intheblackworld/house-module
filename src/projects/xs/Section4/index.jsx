/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
import Carousel from 'components/Carousel'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const list = [
  {
    src: require('./item-1.png'),
    desc: '建築規劃｜李文勝 建築師',
  },
  {
    src: require('./item-2.png'),
    desc: '空間設計｜潘冠榮 設計師',
  },
  {
    src: require('./item-3.png'),
    desc: '燈光美學｜黃暖晰 設計師',
  },
  {
    src: require('./item-4.png'),
    desc: '結構建置｜夏沛禹 結構技師',
  },
]

const ListItem = () => list.map(item => (
  <div className={c.item} key={item.src}>
    <img src={item.src} alt="" className={c.itemImg} />
    <p>{item.desc}</p>
  </div>
))

const Section4 = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  return (
    <div className={bgClass}>
      <div className={c.title}>
        <h3>大師匯聚 演繹人文底蘊</h3>
        <p>思考街廓過往歷史記憶，注重人與環境的互動與銜接，以人為本位構築獨一無二的生活美學。</p>
      </div>
      {isMobile ? (
        <div className={c.carousel}>
          <Carousel slidesToShow={1} fade={false} dots>
            {list.map(item => (
              <div className={c.item} key={item.src}>
                <img src={item.src} alt="" className={c.itemImg} />
                <p>{item.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className={c.content}>
          <ListItem />
        </div>
      )}
    </div>
  )
}

export default Section4
