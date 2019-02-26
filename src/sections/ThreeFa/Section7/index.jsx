import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'
import cx from 'classnames'

import css from './index.scss'

const imgList = [
  `https://via.placeholder.com/${872}x${514}`,
  `https://via.placeholder.com/${872}x${514}`,
  `https://via.placeholder.com/${872}x${514}`,
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
      <p>公設情境示意圖，建設公司保有修改之權利；<br />裝潢示意圖，建設公司保有修改之權利</p>
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
        title="全齡化貼心公設 輝襯幸福生活"
        desc="從生活細節出發，舉凡冷藏包裹代收、兒童遊戲區、健身房，或親友拜訪到交誼廳聊天，多樣化公設，讓生活更為精彩充實"
      />
    </Viewport>
    <Viewport isBottom={false}>
      <Sliders />
    </Viewport>
  </React.Fragment>
)

export default Section5
