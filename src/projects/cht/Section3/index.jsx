/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
import {
  PreContainer, DescContainer, ListContainer, AccordionContainer,
} from 'components/cht'
import { isMobile } from '../../../utils'
import c from './index.scss'

const list = [
  {
    src: require('./best-1.png'),
    title: '【 觀光休閒消費首選 】',
    desc: '220間知名品牌進駐北台最大Outlet',
    label: 1,
  },
  {
    src: require('./best-2.png'),
    title: '【全台最大醫療機構】',
    desc: '豐富精密醫療儀器廠商聚集，全國規模最大',
    label: 2,
  },
  {
    src: require('./best-3.png'),
    title: '【全台最多國際學校】',
    desc: '新北市的天母區，教育國際、聯動區域行情',
    label: 3,
  },
  {
    src: require('./best-4.png'),
    title: '【全台機能最好的重劃】',
    desc: '雙影城、四百貨、九超商、百家異國料理齊聚',
    label: 4,
  },
  {
    src: require('./best-5.png'),
    title: '【新北重劃區首選】',
    desc: '各項建設萬箭齊發，唯有林口居域最超值',
    label: 5,
  },
  {
    src: require('./best-6.png'),
    title: '【商機無限林口最卓越】',
    desc: '閃耀首善型都會區的巨擘光芒，席捲雙北置產焦點',
    label: 6,
  },
  {
    src: require('./best-7.png'),
    title: '【稀有價值天際享有】',
    desc: '70-90坪市場缺稀，稀有性成為生活贏家價值',
    label: 7,
  },
]

const Section3 = () => (
  <div>
    <Viewport isBottom={false}>
      <PreContainer
        title1="生活 盡享好樂趣"
        title2="國際機能"
        desc="Enjoy the Lifestyle"
        src={require('./preImg.jpg')}
      />
    </Viewport>
    <div className={c.container}>
      <Viewport>
        <DescContainer title="無與倫比，打造林口最宜居城市" section={3} />
      </Viewport>
      {isMobile ? <AccordionContainer list={list} /> : <ListContainer list={list} />}
    </div>
  </div>
)

export default Section3
