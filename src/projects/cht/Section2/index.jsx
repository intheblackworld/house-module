/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
import { PreContainer, DescContainer } from 'components/cht'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const slideList = [
  {
    src: require('./slide-1.png'),
    desc: '1',
  },
  {
    src: require('./slide-2.png'),
    desc: '2',
  },
  {
    src: require('./slide-3.png'),
    desc: '3',
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

const Section2 = () => (
  <div>
    <Viewport isBottom={false}>
      <PreContainer title1="林口最好的房子！" title2="擁有即是榮耀" desc="Top City Center" src={require('./preImg.jpg')} />
    </Viewport>
    <div className={c.container}>
      <Viewport>
        <DescContainer title="森鄰有氧住宅‧成就生活藝術地標" section={2} />
      </Viewport>
      <Viewport isBottom={false}>
        <SlidePicker slideList={slideList} />
      </Viewport>
    </div>
  </div>
)

export default Section2
