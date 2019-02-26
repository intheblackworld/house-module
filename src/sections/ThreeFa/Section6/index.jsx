import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'
import cx from 'classnames'

import css from './index.scss'

const imgList = [
  require('./12667.jpg'),
  require('./12668.jpg'),
  require('./12669.jpg'),
  require('./12670.jpg'),
  require('./12671.jpg'),
  require('./12672.jpg'),
  require('./12673.jpg'),
  require('./12674.jpg'),
  require('./12675.jpg'),
  require('./12676.jpg'),
  require('./12677.jpg'),
  require('./12678.jpg'),
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
        title="客製服務 我的世界 由我做主"
        desc="經由專人服務，依家庭成員需求，預先規劃裝潢，省時省力省錢，交屋即住"
      />
    </Viewport>
    <Viewport isBottom={false}>
      <Sliders />
    </Viewport>
  </React.Fragment>
)

export default Section5
