import React from 'react'
import { Image } from 'semantic-ui-react'
import SectionSubTitle from 'components/SectionSubTitle'
import HorizontalTimeline from 'components/HorizontalTimeline'
import ViewPort from 'components/ViewPort'
import leaf1 from '../Master/leaf-left-top.png'
import leaf3 from '../Master/leaf-right-bottom.png'
import css from './index.scss'

const Section6 = () => (
  <React.Fragment>
    <Image src={leaf1} alt="德友藏的圖片" className={css.leaf1} />
    <Image src={leaf3} alt="德友藏的圖片" className={css.leaf2} />
    <ViewPort>
      <SectionSubTitle title="上市公司 品質保證" />
    </ViewPort>
    <HorizontalTimeline />
  </React.Fragment>
)

export default Section6
