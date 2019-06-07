/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
import { DescContainer } from 'components/cht'
import { withTrans } from '../../../utils'
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
]
const ImgContainer = ({ show }) => (
  <div className={withTrans('imgContainer', c, show)}>
    <img src={require('./rich.png')} alt="" />
    <div className={c.label}>富貴森林公園，誠心聚落</div>
  </div>
)

const Section4 = () => (
  <div>
    <div className={c.container}>
      <Viewport>
        <DescContainer title="富貴森林公園第一排" section={6} />
      </Viewport>
      <Viewport>
        <ImgContainer />
      </Viewport>
      <div className={c.containerWithBg}>
        <Viewport>
          <DescContainer title="林口最強住宅 就是唯一" section={7} />
        </Viewport>
        <img src={require('./containerBg.png')} className={c.containerBg} alt="" />
      </div>
      <Viewport>
        <DescContainer title="跨國團隊，營造世界擎天鉅築" section={4} />
      </Viewport>
      <Viewport isBottom={false}>
        <SlidePicker slideList={slideList} />
      </Viewport>
    </div>
  </div>
)

export default Section4
