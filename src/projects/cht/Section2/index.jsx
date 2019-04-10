/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { isMobile } from '../../../utils'
import SlidePicker from 'components/SliderPicker'
import c from './index.scss'

const slideList = [
  {
    src: require('./slide-1.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-2.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-3.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-4.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-5.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-6.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
]
const Section2 = ({ show }) => {
  console.log(show)
  return (
    <div>
      <div className={c.preContainer}>
        <div className={c.preTitle}>
          <h3>
            林口最好的房子！
            <br />
            擁有即是榮耀
          </h3>
        </div>
        <div className={c.preImg}>
          <p>Top City Center</p>
        </div>
      </div>
      <div className={c.container}>
        <div className={c.title}>
          <h3>森鄰有氧住宅‧成就生活藝術地標</h3>
        </div>
        <div className={c.desc}>
          <p>NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置</p>
          <p>NO.2【住宅商業的重鎮地理】重劃區主要商圈分布所在地</p>
          <p>NO.3【串聯北市及桃園機場】機捷線一手在握、放眼世界都心的利多</p>
          <p>NO.4【大口呼吸的綠色城市】綠覆率60%以上綠覆率全台之最</p>
        </div>
        <SlidePicker slideList={slideList} />
      </div>
    </div>
  )
}

export default Section2
