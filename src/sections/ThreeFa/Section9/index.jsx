import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'
import cx from 'classnames'

import css from './index.scss'

const imgList = [
  require('./team1.png'),
  require('./team2.png'),
  require('./team3.png'),
  require('./team4.png'),
  require('./team5.png'),
  require('./team6.png'),
]

const Sliders = ({ show = false }) => {
  const sliderClass = cx(css.slider, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={sliderClass}>
      <div className={css.carousel}>
        <Carousel slidesToShow={1} fade={false} arrows>
          {imgList.map(url => (
            <Image src={url} alt="" key={url} />
          ))}
        </Carousel>
      </div>
      <div className={css.descBg}>
        <li>工務協理：馮 志華</li>
        <li>工務經理：劉 春平</li>
        <li>主任技師：朱 駿魁</li>
        <li>機電副理：周 賜川</li>
        <li>工務所長：張 健益</li>
        <li>建設專案：吳 秋穆</li>
      </div>
      {/* <div className={css.descBg}>
        <h3>
          回家都有音韻的陪伴
          <br />
          生活優雅漫舞
        </h3>
        <p>在公設規劃的每一個角落，都有金革唱片的優雅音韻，伴隨著美好的生活，共舞！</p>
      </div> */}
    </div>
  )
}

const Section5 = () => (
  <React.Fragment>
    <Viewport>
      <SectionTitle
        title="豪宅施工團隊 十年防水保固"
        desc="立信工營造為甲級營造，成員擁有璞園、國泰、大陸工程、昇陽、基泰、達欣⋯⋯等層峰豪宅建商資歷"
        desc2="以精湛工法、嚴謹工地管理，宣示十年防水保固，給予消費者更全面保障"
      />
    </Viewport>
    <Viewport isBottom={false}>
      <Sliders />
    </Viewport>
  </React.Fragment>
)

export default Section5
