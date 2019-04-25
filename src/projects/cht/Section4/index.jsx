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
    src: require('./slide-4.png'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
]

const Section4 = () => (
  <div>
    <Viewport isBottom={false}>
      <PreContainer title1="長虹× P&T‧品牌之最" title2="精工團隊" desc="Brand to the Future" src={require('./preImg.jpg')} />
    </Viewport>
    <div className={c.container}>
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