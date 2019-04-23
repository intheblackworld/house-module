/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
import Carousel from 'components/Carousel'
// import {
//   PreContainer, DescContainer, ListContainer, AccordionContainer,
// } from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const list = [
  {
    src: require('./leftImg.png'),
    title: '【 觀光休閒消費首選 】',
    desc: '220間知名品牌進駐北台最大Outlet',
    label: 1,
  },
  {
    src: require('./right-img-1.png'),
    title: '【全台最大醫療機構】',
    desc: '豐富精密醫療儀器廠商聚集，全國規模最大',
    label: 2,
  },
  {
    src: require('./right-img-2.png'),
    title: '【全台最多國際學校】',
    desc: '新北市的天母區，教育國際、聯動區域行情',
    label: 3,
  },
]

const Section3 = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  return (
    <div className={bgClass}>
      {isMobile ? (
        <div>
          <div className={c.text}>
            <h3>經典，才值得一代傳一代</h3>
            <p>
              挑選台北西區最罕見黃金角地， 以三面臨路大器姿態，
              成為城心亮眼地標。汲取「台北第一街」貴陽街豐厚歷史脈絡，
              藉由500坪完整街廓、64米謙和標高，再現台北城心最動人的百年風華。
            </p>
          </div>
          <div className={c.carousel}>
            <Carousel slidesToShow={1} fade={false} dots arrows>
              {list.map(item => (
                <img src={item.src} alt="" key={item.src} />
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div>
          <img src={require('./leftImg.png')} alt="" className={c.leftImg} />
          <div className={c.content}>
            <div className={c.text}>
              <img src={require('./right-img-1.png')} alt="" className={c.rightImg} />
              <img src={require('./right-img-2.png')} alt="" className={c.rightImg} />
              <h3>經典，才值得一代傳一代</h3>
              <p>
                挑選台北西區最罕見黃金角地， 以三面臨路大器姿態，
                成為城心亮眼地標。汲取「台北第一街」貴陽街豐厚歷史脈絡，
                藉由500坪完整街廓、64米謙和標高，再現台北城心最動人的百年風華。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Section3
