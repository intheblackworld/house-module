import React from 'react'
import { Image } from 'semantic-ui-react'
import SectionTitle from 'components/SectionTitle'
import Viewport from 'components/ViewPort'
import cx from 'classnames'
import css from './index.scss'

const items = [
  {
    title: '超快捷效率',
    desc: '江子翠站、華江橋、重翠橋、台64八里新店線、台65五股土城線、環河快速道全方位路網。',
    url: require('./item-1.jpg'),
  },
  {
    title: '超近台北市',
    desc: '雄踞板橋頭，以第一線地位，一橋直抵台北市，與雙子星相呼應。',
    url: require('./item-2.jpg'),
  },
  {
    title: '超讚玩樂趣',
    desc: '鄰近雙十路、文化路二段、華江市場、新板特區、新埔市場、四維市場、裕民夜市等繁華商圈。',
    url: require('./item-3.jpg'),
  },
  {
    title: '超美樂休閒',
    desc: '鄰近時光公園、光復賞鳥公園、河濱公園、稚匯公園等豐沛綠意。',
    url: require('./item-4.jpg'),
  },

  {
    title: '超優質書香',
    desc: '江翠國小、江翠國中、板橋圖書館總館、江子翠分館等，營造優雅文風。',
    url: require('./item-5.jpg'),
  },

  {
    title: '超強大商場',
    desc: '5000坪帝國廣場做鄰居，未來美食、商場開幕，貼身享受食衣住行等多元娛樂。',
    url: require('./item-6.jpg'),
  },
]

const Item = ({ show, item }) => {
  const itemClass = cx(css.main, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={itemClass}>
      <Image src={item.url} alt="立信吾界的圖片" key={item.url} />
      <div className={css.content}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

const Section3 = () => (
  <React.Fragment>
    {/* <div className={css.title}>4招買房必勝關鍵</div> */}
    <Viewport>
      <SectionTitle title="江翠第一線 核心金鑽區" />
    </Viewport>
    <div className={css.container}>
      {items.map(item => (
        <Viewport key={item.url}>
          <Item item={item} />
        </Viewport>
      ))}
    </div>
  </React.Fragment>
)

export default Section3
