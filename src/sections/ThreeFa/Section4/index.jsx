import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image, Container } from 'semantic-ui-react'
import Carousel from 'components/Carousel'
import Viewport from 'components/ViewPort'
import cx from 'classnames'

import reward from 'assets/img/section4/reward.png'
// import descBg from 'assets/img/section4/descBg.png'
import leaf1 from 'assets/img/master/leaf-left-top.png'
import leaf3 from 'assets/img/master/leaf-right-bottom.png'

import css from './index.scss'

const imgList = [
  require('assets/img/section4/public-1.png'),
  require('assets/img/section4/public-2.png'),
  require('assets/img/section4/public-3.png'),
  require('assets/img/section4/public-4.png'),
  require('assets/img/section4/public-5.png'),
  require('assets/img/section4/public-6.png'),
  require('assets/img/section4/public-7.png'),
  require('assets/img/section4/public-8.png'),
  require('assets/img/section4/public-9.png'),
  require('assets/img/section4/public-10.png'),
  require('assets/img/section4/public-11.png'),
  require('assets/img/section4/public-12.png'),
]

const Sliders = ({ show = false }) => {
  const sliderClass = cx(css.slider, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={sliderClass}>
      <div className={css.carousel}>
        <Carousel slidesToShow={1} fade={false} dots>
          {imgList.map(url => (
            <Image src={url} alt="" key={url} />
          ))}
        </Carousel>
      </div>
      <div className={css.descBg}>
        <h3>
          回家都有音韻的陪伴
          <br />
          生活優雅漫舞
        </h3>
        <p>在公設規劃的每一個角落，都有金革唱片的優雅音韻，伴隨著美好的生活，共舞！</p>
      </div>
    </div>
  )
}

const Section4 = () => (
  <React.Fragment>
    <Image src={leaf1} alt="1" className={css.leaf1} />
    <Image src={leaf3} alt="1" className={css.leaf2} />
    <Container>
      <Viewport>
        <SectionTitle
          titleTop="最潮建築"
          titleBottom="ARCHITECTURE"
          iconUrl={reward}
          slolganMain="文青必來新地標，藝術美感全都上身!"
          sloganDescription="大器內退前院、挑高迎賓大廳、第二門廳、休憩閱讀區，搭配飯店式簡約外觀，襯托人生優雅品味！"
        />
      </Viewport>
      <Viewport>
        <Sliders />
      </Viewport>
    </Container>
  </React.Fragment>
)

export default Section4
