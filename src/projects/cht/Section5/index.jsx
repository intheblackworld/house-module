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

const Section4 = () => (
  <div>
    <Viewport isBottom={false}>
      <PreContainer title1="貼心幸福‧奢華無設限" title2="極上設施" desc="Be the Luxury Amenities" src={require('./preImg.jpg')} />
    </Viewport>
    <div className={c.container}>
      <Viewport>
        <DescContainer title="頂級公設，隨時回家享受悠然時光" section={4} />
      </Viewport>
      <Viewport isBottom={false}>
        <SlidePicker slideList={slideList} />
      </Viewport>
    </div>
  </div>
)

export default Section4
