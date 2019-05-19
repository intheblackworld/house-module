import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import SectionSubTitle from 'components/SectionSubTitle'
import HorizontalTimeline from 'components/HorizontalTimeline'
import ViewPort from 'components/ViewPort'
import leaf1 from '../Master/leaf-left-top.png'
import leaf3 from '../Master/leaf-right-bottom.png'
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
            <Image src={url} alt="立信吾界的圖片" key={url} />
          ))}
        </Carousel>
      </div>
      <p>裝潢示意圖，建設公司保有修改之權利</p>
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
    <Image src={leaf1} alt="長虹天際的圖片" className={css.leaf1} />
    <Image src={leaf3} alt="長虹天際的圖片" className={css.leaf2} />
    <ViewPort>
      <SectionSubTitle title="上市公司 品質保證" />
    </ViewPort>
    <HorizontalTimeline />
  </React.Fragment>
)

export default Section5
