/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import { Element } from 'react-scroll'
import Viewport from 'components/ViewPort'
import ImageBg from 'components/ImageBg'
// import c from './index.scss'

const Section2 = () => (
  <div>
    <Element id="section2" style={{ margin: '-5px 0' }}>
      <Viewport isBottom={false}>
        <ImageBg imgSrc={require('./d2.jpg')} mImgSrc={require('./m2.jpg')} />
      </Viewport>
    </Element>
    <Element id="section3" style={{ margin: '-5px 0' }}>
      <Viewport isBottom={false}>
        <ImageBg imgSrc={require('./d3.jpg')} mImgSrc={require('./m3.jpg')} />
      </Viewport>
    </Element>
    <Element id="section4" style={{ margin: '-5px 0' }}>
      <Viewport isBottom={false}>
        <ImageBg imgSrc={require('./d4.jpg')} mImgSrc={require('./m4.jpg')} />
      </Viewport>
    </Element>
    <Element id="section5" style={{ margin: '-5px 0' }}>
      <Viewport isBottom={false}>
        <ImageBg imgSrc={require('./d5.jpg')} mImgSrc={require('./m5.jpg')} />
      </Viewport>
    </Element>
    <Element id="section6" style={{ margin: '-5px 0' }}>
      <Viewport isBottom={false}>
        <ImageBg imgSrc={require('./d6.jpg')} mImgSrc={require('./m6.jpg')} />
      </Viewport>
    </Element>
    <Element id="section7" style={{ margin: '-5px 0' }}>
      <Viewport isBottom={false}>
        <ImageBg imgSrc={require('./d7.jpg')} mImgSrc={require('./m7.jpg')} />
      </Viewport>
    </Element>
  </div>
)

export default Section2
